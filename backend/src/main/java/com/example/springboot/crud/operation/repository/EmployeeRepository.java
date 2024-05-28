package com.example.springboot.crud.operation.repository;

import com.example.springboot.crud.operation.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {


}

