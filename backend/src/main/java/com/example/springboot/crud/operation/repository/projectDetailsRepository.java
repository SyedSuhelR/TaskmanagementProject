package com.example.springboot.crud.operation.repository;

import com.example.springboot.crud.operation.model.ProjectDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface projectDetailsRepository extends JpaRepository<ProjectDetails,Long> {
}
