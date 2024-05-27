package com.example.springboot.crud.operation.repository;

import com.example.springboot.crud.operation.model.TaskDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<TaskDetails,Long> {
}
