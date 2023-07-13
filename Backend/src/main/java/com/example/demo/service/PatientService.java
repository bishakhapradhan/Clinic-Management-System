package com.example.demo.service;


import com.example.demo.dto.PatientUpdateDto;
import com.example.demo.model.Patient;
import java.util.List;

public interface PatientService {

    List<Patient> getAllPatient();

    Patient findByfullname(String fullname);

    Patient findById(int id);

    Patient addPatient(Patient patient);
    //Patient findbyFullname()

    String deletePatient(int id);

    Patient updatePatient(PatientUpdateDto patient);



}
