package com.example.springboot.crud.operation.controller;

import com.example.springboot.crud.operation.model.TaskDetails;
import com.example.springboot.crud.operation.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    // Create a new task
    @PostMapping
    public TaskDetails createTask(@RequestBody TaskDetails taskDetails) {
        return taskRepository.save(taskDetails);
    }

    // Get all tasks
    @GetMapping("/get")
    public List<TaskDetails> getAllTasks() {
        return taskRepository.findAll();
    }

    // Get a task by ID
    @GetMapping("{id}")
    public ResponseEntity<TaskDetails> getTaskById(@PathVariable Long id) {
        Optional<TaskDetails> task = taskRepository.findById(id);
        if (task.isPresent()) {
            return ResponseEntity.ok(task.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Update a task
    @PutMapping("{id}")
    public ResponseEntity<TaskDetails> updateTask(@PathVariable Long id, @RequestBody TaskDetails taskDetails) {
        Optional<TaskDetails> taskOptional = taskRepository.findById(id);
        if (taskOptional.isPresent()) {
            TaskDetails existingTask = taskOptional.get();
            existingTask.setTaskTitle(taskDetails.getTaskTitle());
            existingTask.setDescription(taskDetails.getDescription());
            existingTask.setDueDate(taskDetails.getDueDate());
            existingTask.setPriority(taskDetails.getPriority());
            existingTask.setStatus(taskDetails.getStatus());
            TaskDetails updatedTask = taskRepository.save(existingTask);
            return ResponseEntity.ok(updatedTask);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a task
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        Optional<TaskDetails> taskOptional = taskRepository.findById(id);
        if (taskOptional.isPresent()) {
            taskRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
