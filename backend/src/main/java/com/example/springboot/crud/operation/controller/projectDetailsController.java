package com.example.springboot.crud.operation.controller;

import com.example.springboot.crud.operation.model.ProjectDetails;
import com.example.springboot.crud.operation.repository.projectDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/projectDetails")
public class projectDetailsController {

    @Autowired
    private projectDetailsRepository projectDetails;

    public List<ProjectDetails> getProjectDetails(){

        return projectDetails.findAll();
    }
}
