 import React, { useEffect } from 'react'
 import { useState } from 'react'
 import { useNavigate } from 'react-router-dom'
 import { CForm, CFormLabel, CFormInput, CButton, CFormSelect } from '@coreui/react'
 import { addpatient } from '../rest-api/Patient-RestApi'
 //import listRole from '../rest-api/Role-api'

 const AddPatient = () => {
   const navigate = useNavigate()



  //  const loadRoles = () => {
  //    listRole()
  //      .then((res) => res.data)
  //      .then((rows) => {
  //        setRoles(rows)
  //      })
  //      .catch((error) => {
  //        console.log(error)
  //      })
  //  }

   const [patient, setPatient] = useState({

     fullName: '',
     address: '',
     age:'',
     gender:'',
     description:'',

      })


   const handleChange = (e) => {
     const { name, value } = e.target
     setPatient((prevState) => ({
       ...prevState,
       [name]: value,
     }))
   }

   const handleSubmit = () => {
     addpatient(patient).then( data => {
     console.log("patient Added Successfully");
     navigate("/dashboard")
   }).catch( error  => {
     console.log(error);
     console.log("Error when adding patient");
   })
   }

//  useEffect(() => {
//      loadRoles()
//    }, [])

 return (
   <div>  <CForm>
   <div className="mb-3">
     <CFormLabel >patient Name</CFormLabel>
    <CFormInput type="text" placeholder="Enter patient name" name="PatientName" value={patient.fullname} onChange={handleChange}/>
   </div>

   <div className="mb-3">
     <CFormLabel >Address</CFormLabel>
     <CFormInput type="text" placeholder="Enter Address" name="address"  value={patient.address} onChange={handleChange}/>
   </div>


   <div className="mb-3">
     <CFormLabel >Gender</CFormLabel>
     <CFormInput type="text" placeholder="Enter Gender" name="gender" value={patient.gender} onChange={handleChange}/>
  </div>

   <div className="mb-3">
     <CFormLabel >Age</CFormLabel>
    <CFormInput type="text" placeholder="Enter Age" name="age" value={patient.age} onChange={handleChange}/>
  </div>

  <div className="mb-3">
     <CFormLabel >Description</CFormLabel>
    <CFormInput type="text" placeholder="Enter descrption" name="description" value={patient.description} onChange={handleChange}/>
  </div>



   <CButton color="primary" onClick={handleSubmit} >Submit</CButton>
 </CForm></div>
 )
}


export default AddPatient

