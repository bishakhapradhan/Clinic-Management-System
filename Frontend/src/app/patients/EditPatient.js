import React, { useState, useEffect } from 'react'

import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { editPatient, getPatient } from '../rest-api/Patient-RestApi'

const EditPatient= () => {
    let { id } = useParams()


    const navigate = useNavigate()
    const [patient, setPatient] = useState({})

    useEffect(() => {
      loadPatient(id)
    }, [])

    const loadPatient= (id) => {
        getPatient(id)
          .then((res) => res.data)
          .then((rows) => {
            setPatient(rows)
          })
          .catch((error) => {
            console.log(error)
          })
      }

      const handleChange = (event) => {
        const { name, value } = event.target
        setPatient((prevState) => ({
          ...prevState,
          [name]: value,
        }))
        console.log(patient.id)
      }

      const handleSubmit = () => {
        patient.role =null;
        editPatient(patient)
          .then((data) => {
            console.log('Patient added successfully')
            navigate('/patient')
          })
          .catch((error) => {})
      }


 return (
    <div>
      <CForm>
        <div div className="mb-3">
          <CFormLabel>FullName</CFormLabel>
          <CFormInput
            type="text"
            name="fullName"
            value={patient.fullName}
            onChange={handleChange}
            placeholder="Enter your fullname"
          />
        </div>
        <div className="mb-3">
          <CFormLabel>Address</CFormLabel>
          <CFormInput
            type="text"
            placeholder="Enter your address"
            name="address"
            value={patient.address}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <CFormLabel>Age</CFormLabel>
          <CFormInput
            type="number"
            placeholder="enter your age"
            name="age"
            value={patient.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <CFormLabel>Gender</CFormLabel>
          <CFormInput
            type="text"
            placeholder="enter your gender"
            name="gender"
            value={patient.gender}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <CFormLabel>Description</CFormLabel>
          <CFormInput
            type="text"
            placeholder=""
            name="Description"
            value={patient.description}
            onChange={handleChange}
          />
        </div>


      </CForm>
      <CButton color="primary" onClick={handleSubmit}>
        Submit
      </CButton>
    </div>
  )
}

export default EditPatient
