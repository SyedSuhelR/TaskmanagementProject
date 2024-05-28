package com.example.springboot.crud.operation;

import com.example.springboot.crud.operation.model.Employee;
import com.example.springboot.crud.operation.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootCrudOperationApplication implements CommandLineRunner {

	public static void main(String[] args) {

		SpringApplication.run(SpringbootCrudOperationApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
		Employee employee=new Employee();

	}


}
