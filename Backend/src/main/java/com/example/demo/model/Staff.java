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

public class Staff {

    private String  fullname;
    private String address;
    private String gender;
    private int age;

 @OneToMany
      @JoinColumn(name = "user_id")
    List<ResourceFile> files;
    public String getfullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }


}    






