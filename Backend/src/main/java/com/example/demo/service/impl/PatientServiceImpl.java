package com.example.demo.service.impl;

import com.example.demo.dto.PatientUpdateDto;
import com.example.demo.model.Patient;
import com.example.demo.repository.PatientRepository;
import com.example.demo.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;
    @Override
    public List<Patient> getAllPatient()
    {
        return null;
        //return PatientRepository.findAll();
    }

    @Override
    public Patient findByfullname(String fullname){
        return null;}
    @Override
    public Patient findById(int id) {
        Optional<Patient>optionalPatient = patientRepository.findById(id);
        return optionalPatient.orElseThrow(null);
    }

    @Override
    public Patient addPatient(Patient patient) {

        return patientRepository.save(patient);
    }

    @Override
    public String deletePatient(int id)
    {
        findById(id);
        patientRepository.findById(id).orElseThrow(()->new RuntimeException("Patient not found"));
        return "Patient Deleted Successfully";
    }

    @Override
    public Patient updatePatient(PatientUpdateDto updateDto) {
        Patient patient = findById(updateDto.getId());
        patient.setFullName(updateDto.getFullName());
        patient.setAddress(updateDto.getAddress());
        patient.setAge(updateDto.getAge());
        patient.setGender(updateDto.getGender());
        patient.setDescription(updateDto.getDescription());
        patient.setTreatmentType(updateDto.getTreatmentType());
        return patientRepository.save(patient);
    }
}
