package com.example.springboot.crud.operation.controller;

import com.example.springboot.crud.operation.exceptions.ResourceNotfoundException;
import com.example.springboot.crud.operation.model.Employee;
import com.example.springboot.crud.operation.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashSet;
import java.util.List;

@RestController
@RequestMapping("/users")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/add")
    public ResponseEntity<Employee>  createEmployee(@RequestBody Employee employee) {

        Employee emp = employeeRepository.save(employee);

        return new ResponseEntity<>(emp, HttpStatus.OK);
    }

    @GetMapping
    public List<Employee> getEmployee(){

        return employeeRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable  long id){
        Employee employee=employeeRepository.findById(id).orElseThrow(() -> new ResourceNotfoundException("Employee not exist with this id "+ id));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails){
        Employee updateEmployee=employeeRepository.findById(id).orElseThrow(() -> new ResourceNotfoundException("Employee not exist with id "+id));
        updateEmployee.setName(employeeDetails.getName());
        updateEmployee.setEmail(employeeDetails.getEmail());
        updateEmployee.setEmail(employeeDetails.getUserRole());
        updateEmployee.setEmail(employeeDetails.getActiveStatus());

        employeeRepository.save(updateEmployee);
        return ResponseEntity.ok(updateEmployee);

    }


    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
        Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotfoundException("Employee not found with this id "+id));
        employeeRepository.delete(employee);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);


    }

}
