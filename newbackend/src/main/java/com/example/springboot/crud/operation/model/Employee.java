package com.example.springboot.crud.operation.model;


import jakarta.persistence.*;
import lombok.*;
import org.springframework.scheduling.config.Task;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Set;

@CrossOrigin
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class Employee {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userid;
    private String name;
    private String Email;
    private String userRole;
    private String activeStatus;
    private String password;

//    @ManyToMany(mappedBy = "employees")
//    private List<TaskDetails> tasks;


    @ManyToMany(mappedBy = "employee")
    private List<ProjectDetails> project;


    @OneToMany(mappedBy = "Employee")
    private List<TaskDetails> tasksDetails;

    @ManyToMany(mappedBy = "Employee")
    private List<clientDetails> clientDetails;
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getActiveStatus() {
        return activeStatus;
    }

    public void setActiveStatus(String activeStatus) {
        this.activeStatus = activeStatus;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }




    @Override
    public String toString() {
        return "Employee{" +
                "userid=" + userid +
                ", name='" + name + '\'' +
                ", Email='" + Email + '\'' +
                ", userRole='" + userRole + '\'' +
                ", activeStatus='" + activeStatus + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
