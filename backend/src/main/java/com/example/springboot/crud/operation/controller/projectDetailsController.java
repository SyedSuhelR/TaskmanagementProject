package com.example.springboot.crud.operation.controller;

import com.example.springboot.crud.operation.model.ProjectDetails;
import com.example.springboot.crud.operation.repository.projectDetailsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/projectDetails")
public class projectDetailsController {

    @Autowired
    private projectDetailsRepository projectDetailsRepository;

    @GetMapping
    public List<ProjectDetails> getProjectDetails(){

        return projectDetailsRepository.findAll();
    }

    @GetMapping("{projectId}")
    public Optional<ProjectDetails> getProjectDetailsById(@PathVariable long projectId) {
        return projectDetailsRepository.findById(projectId);
    }


    @PostMapping("/add")
    public ProjectDetails saveProjectDetails(ProjectDetails projectDetails) {
        return projectDetailsRepository.save(projectDetails);
    }


    @PutMapping("{projectId}")
    public ProjectDetails updateProjectDetails(long projectId, ProjectDetails updatedProjectDetails) {
        ProjectDetails existingProjectDetails = projectDetailsRepository.findById(projectId)
                .orElseThrow(() -> new EntityNotFoundException("ProjectDetails not found with id: " + projectId));

        // Update existing project details with new values
        existingProjectDetails.setProjectName(updatedProjectDetails.getProjectName());
        existingProjectDetails.setStartDate(updatedProjectDetails.getStartDate());
        existingProjectDetails.setEndDate(updatedProjectDetails.getEndDate());
        existingProjectDetails.setProjectStatus(updatedProjectDetails.getProjectStatus());

        // Save and return the updated project details
        return projectDetailsRepository.save(existingProjectDetails);
    }

    @DeleteMapping("{projectId}")
    public ResponseEntity<?> deleteProjectDetails(@PathVariable long projectId) {
        projectDetailsRepository.deleteById(projectId);
        return ResponseEntity.ok().build();
    }


}
