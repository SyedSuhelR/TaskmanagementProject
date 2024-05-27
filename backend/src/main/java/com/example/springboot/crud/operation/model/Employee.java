package com.example.springboot.crud.operation.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;

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

    @ManyToMany
    @JoinTable(
            name = "employee_project",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "project_id")
    )
    private Set<ProjectDetails> projects;

    // Getters and setters


    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public Set<ProjectDetails> getProjects() {
        return projects;
    }

    public void setProjects(Set<ProjectDetails> projects) {
        this.projects = projects;
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
