import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { deletePatient, listPatient } from '../rest-api/Patient-RestApi'
import { NavLink } from 'react-router-dom'
import { FaTrashAlt, FaPen } from 'react-icons/fa'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
const ViewPatient = () => {
  const [rows, setRows] = useState([])

  const [deleteModal, setDeleteModal] = useState({
    visible: false,
    id: '',
  })

  useEffect(() => {
    loadPatient()
  }, [])

  const columns = [
    {
      name: 'Name',
      selector: (row) => row.fullName,
      sortable: true,
    },
    {
      name: 'Address',
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: 'Age',
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: 'Gender',
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
      sortable: true,
    },



    {
      name: 'Action',
      cell: (row) => (
        <div>
          <NavLink to={`/patients/edit/${row.id}`}>
            <FaPen />
          </NavLink>
          &nbsp; &nbsp;
          <FaTrashAlt onClick={() => setDeleteModal({ visible: true, id: row.id })} />
        </div>
      ),
    },
  ]

  const handleDelete = (id) => {
    console.log('Deleting patients' + id)
    deletePatient(id)
      .then((res) => {
        console.log('patient deleted successfully')
        window.location.reload(false)
      })
      .catch((error) => {
        console.log('patient deletion failed')
      })
  }
  const loadPatient = () => {
    listPatient()
      .then((res) => res.data)
      .then((rows) => {
        setRows(rows)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <DataTable striped columns={columns} data={rows} pagination />

      <CModal visible={deleteModal.visible} onClose={() => setDeleteModal({ visible: false })}>
        <CModalHeader>
          <CModalTitle>Deletion Confirmation</CModalTitle>
        </CModalHeader>
        <CModalBody>
          patient id are lost permanently. <br />
          Are you sure , you want to delete this patient ?
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary"
           onClick={() => setDeleteModal({ visible: false })}
           >
            Cancel
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              setDeleteModal({ visible: false })
              handleDelete(deleteModal.id)
            }}
          >
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default ViewPatient
