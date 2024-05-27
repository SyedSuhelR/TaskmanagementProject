package com.example.springboot.crud.operation.controller;

import com.example.springboot.crud.operation.model.Employee;
import com.example.springboot.crud.operation.model.TaskDetails;
import com.example.springboot.crud.operation.model.clientDetails;
import com.example.springboot.crud.operation.repository.EmployeeRepository;
import com.example.springboot.crud.operation.repository.clientDetailsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clientDetails")
public class clientDetailsController {

    @Autowired
    private clientDetailsRepository clientDetailsRepository;

    @PostMapping("/add")
    public clientDetails saveClientDetails(clientDetails clientDetails) {
        return clientDetailsRepository.save(clientDetails);
    }

    @GetMapping
    public List<clientDetails> getAllClientDetails() {
        return clientDetailsRepository.findAll();
    }

    @GetMapping("{clientId}")
    public Optional<clientDetails> getClientDetailsById(@PathVariable long clientId) {
        return clientDetailsRepository.findById(clientId);
    }


    @PutMapping("{clientId}")
    public clientDetails updateClientDetails(@PathVariable long clientId, clientDetails updatedClientDetails) {
        clientDetails existingClientDetails = clientDetailsRepository.findById(clientId)
                .orElseThrow(() -> new EntityNotFoundException("clientDetails not found with id: " + clientId));

        // Update existing client details with new values
        existingClientDetails.setClientName(updatedClientDetails.getClientName());
        existingClientDetails.setEmail(updatedClientDetails.getEmail());
        existingClientDetails.setAdress(updatedClientDetails.getAdress());

        // Save and return the updated client details
        return clientDetailsRepository.save(existingClientDetails);
    }

    @DeleteMapping("{clientId}")
    public ResponseEntity<?> deleteClientDetails(@PathVariable long clientId) {
        clientDetailsRepository.deleteById(clientId);
        return ResponseEntity.ok().build();
    }
}
