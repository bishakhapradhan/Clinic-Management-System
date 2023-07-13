package com.example.demo.controller;


import com.example.demo.dto.PatientUpdateDto;
import com.example.demo.model.Patient;
import com.example.demo.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/patient")

public class PatientController {

        @Autowired
        private PatientService patientService;

        @GetMapping
        public List<Patient> getAll(){
            return patientService.getAllPatient();
        }

        @GetMapping("/{id}")
        public Patient findById(@PathVariable int id){
            return patientService.findById(id);
        }

        @PostMapping
        public Patient addPatient (@RequestBody @Valid Patient patient){
            return patientService.addPatient(patient);
        }

        @PutMapping
        public ResponseEntity<Patient> PatientUpdateDto(@RequestBody @Valid PatientUpdateDto patient){

             Patient updatedPatient= patientService.updatePatient(patient);
            return new ResponseEntity<>(updatedPatient, HttpStatus.OK);
        }

        @DeleteMapping("/{id}")
        public String deletePatient(@PathVariable int id){
            return patientService.deletePatient(id);
        }
    }


