package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@JsonIdentityInfo(generator
        = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")

public class Patient{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true)
    @NotBlank(message = "patient name is required.")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)


    private int age;
    private String fullName;
    private String address;
    private String gender;

    //private String TreatmentType;

    private String Description;


    public Patient() {
    }

    //public String getTreatmentType() {
     //   return TreatmentType;
    //}

    //public void setTreatmentType(String treatmentType) {
        //TreatmentType = treatmentType;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
