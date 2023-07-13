package com.example.demo.dto;

public class PatientUpdateDto {

    private int id;
    private int age;
    private String fullName;
    private String address;
    private String gender;
    private String TreatmentType;
    private String Description;

    public PatientUpdateDto() {
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

    public String getTreatmentType() {
        return TreatmentType;
    }

    public void setTreatmentType(String treatmentType) {
        TreatmentType = treatmentType;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }
}
