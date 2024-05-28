package com.example.springboot.crud.operation.model;

import jakarta.persistence.*;
import lombok.*;

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
    @JoinColumn(name="Id")
    private clientDetails Id;

    @Override
    public String toString() {
        return "ProjectDetails{" +
                "projectId=" + projectId +
                ", projectName='" + projectName + '\'' +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", projectStatus='" + projectStatus + '\'' +
                ", Id=" + Id +
                '}';
    }

    public clientDetails getId() {
        return Id;
    }

    public void setId(clientDetails id) {
        Id = id;
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
