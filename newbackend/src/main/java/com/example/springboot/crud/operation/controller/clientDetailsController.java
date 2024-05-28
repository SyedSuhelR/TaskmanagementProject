package com.example.springboot.crud.operation.controller;

import com.example.springboot.crud.operation.exceptions.ResourceNotfoundException;
import com.example.springboot.crud.operation.model.Employee;
import com.example.springboot.crud.operation.model.clientDetails;
import com.example.springboot.crud.operation.repository.EmployeeRepository;
import com.example.springboot.crud.operation.repository.clientDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/add")
    public ResponseEntity<clientDetails> createEmployee(@RequestBody clientDetails clientDetails) {
        clientDetails emp = ClientDetails.save(clientDetails);
        return new ResponseEntity<>(emp, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<clientDetails> getEmployeeById(@PathVariable  long id){
        clientDetails employee=ClientDetails.findById(id).orElseThrow(() -> new ResourceNotfoundException("client not exist with this id "+ id));
        return ResponseEntity.ok(employee);
    }


    @PutMapping("{id}")
    public ResponseEntity<clientDetails> updateEmployee(@PathVariable long id,@RequestBody clientDetails clientDetails){
        clientDetails updateClient=ClientDetails.findById(id).orElseThrow(() -> new ResourceNotfoundException("client not exist with id "+id));
        updateClient.setClientName(clientDetails.getClientName());
        updateClient.setEmail(clientDetails.getEmail());
        updateClient.setAdress(clientDetails.getAdress());
        ClientDetails.save(updateClient);
        return ResponseEntity.ok(updateClient);
    }


    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
        clientDetails employee=ClientDetails.findById(id).orElseThrow(()-> new ResourceNotfoundException("client not found with this id "+id));
        ClientDetails.delete(employee);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
