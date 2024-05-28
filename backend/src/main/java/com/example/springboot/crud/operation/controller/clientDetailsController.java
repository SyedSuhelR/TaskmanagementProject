package com.example.springboot.crud.operation.controller;

import com.example.springboot.crud.operation.model.Employee;
import com.example.springboot.crud.operation.model.clientDetails;
import com.example.springboot.crud.operation.repository.EmployeeRepository;
import com.example.springboot.crud.operation.repository.clientDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/clientDetails")
public class clientDetailsController {

    @Autowired
    private clientDetailsRepository ClientDetails;

    @GetMapping
    public List<clientDetails> getClientDetails() {
        return ClientDetails.findAll();
    }




}
