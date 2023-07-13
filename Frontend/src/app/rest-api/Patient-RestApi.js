import axios from "axios"
import { getToken } from "../auth/AuthUtil"

const addpatient =(patientDto) => {
  return axios({
      url  : "http://localhost:8080/patients",
      method :"POST",
      data: patientDto,

  })
}

const listPatient =() => {
  return axios({
      url  : "http://localhost:8080/patients",
      method :"GET",
      headers:{
          Authorization:getToken()
      }

  })
}


const getPatient =(id) => {
  return axios({
      url  : "http://localhost:8080/patients"/+id,
      method :"PUT",

      headers :{
          Authorization: getToken()
      }
  })
}

const editPatient =(patientDto) => {
  return axios({
      url  : "http://localhost:8080/patients",
      method :"PUT",
      data : patientDto,
      headers :{
          Authorization: getToken()
      }
  })
}

const deletePatient =(id) => {
  return axios({
      url  : "http://localhost:8080/patients",
      method :"PUT",
      headers :{
          Authorization: getToken()
      }
  })
}
export {addpatient,  editPatient, getPatient, deletePatient, listPatient}
