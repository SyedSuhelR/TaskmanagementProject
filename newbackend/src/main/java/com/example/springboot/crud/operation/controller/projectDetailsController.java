package com.example.springboot.crud.operation.controller;

import com.example.springboot.crud.operation.exceptions.ResourceNotfoundException;
import com.example.springboot.crud.operation.model.Employee;
import com.example.springboot.crud.operation.model.ProjectDetails;
import com.example.springboot.crud.operation.repository.projectDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projectDetails")
public class projectDetailsController {

    @Autowired
    private projectDetailsRepository projectDetails;

    public List<ProjectDetails> getProjectDetails(){
        return projectDetails.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<ProjectDetails> createEmployee(@RequestBody ProjectDetails project) {

        ProjectDetails emp =projectDetails.save(project);
        return new ResponseEntity<>(emp, HttpStatus.OK);
    }


    @GetMapping("{id}")
    public ResponseEntity<ProjectDetails> getEmployeeById(@PathVariable  long id){
        ProjectDetails employee=projectDetails.findById(id).orElseThrow(() -> new ResourceNotfoundException("Project is not exist with this id "+ id));
        return ResponseEntity.ok(employee);
    }


    @PutMapping("{id}")
    public ResponseEntity<ProjectDetails> updateEmployee(@PathVariable long id,@RequestBody ProjectDetails details){
        ProjectDetails updateEmployee=projectDetails.findById(id).orElseThrow(() -> new ResourceNotfoundException("Project is not exist with id "+id));
        updateEmployee.setProjectName(details.getProjectName());
        updateEmployee.setStartDate(details.getStartDate());
        updateEmployee.setEndDate(details.getEndDate());
        updateEmployee.setProjectStatus(details.getProjectStatus());
        projectDetails.save(updateEmployee);
        return ResponseEntity.ok(updateEmployee);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id) {
        ProjectDetails employee = projectDetails.findById(id).orElseThrow(() -> new ResourceNotfoundException("Project not found with this id " + id));
        projectDetails.delete(employee);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
