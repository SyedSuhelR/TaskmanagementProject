package com.example.springboot.crud.operation.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Set;

@CrossOrigin
@Setter
@Getter
@Data
@Entity
@Table(name = "ProjectDetails")
@AllArgsConstructor
@NoArgsConstructor
public class ProjectDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long projectId;
    private String projectName;
    private String startDate;
    private String endDate;
    private String projectStatus;


    @ManyToOne
    @JoinColumn(name="project")
    private clientDetails clientDetails;

    @ManyToMany
    @JoinTable(
            name ="project",
    joinColumns = @JoinColumn(name = "projectId"),
    inverseJoinColumns = @JoinColumn(name = "EmployeeId"))
    private List<Employee> employee;

    @Override
    public String toString() {
        return "ProjectDetails{" +
                "projectId=" + projectId +
                ", projectName='" + projectName + '\'' +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", projectStatus='" + projectStatus + '\'' +

                '}';
    }



    public String getProjectStatus() {
        return projectStatus;
    }

    public void setProjectStatus(String projectStatus) {
        this.projectStatus = projectStatus;
    }

    public String getEndDate() {
        return endDate;
    }


    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }



}
