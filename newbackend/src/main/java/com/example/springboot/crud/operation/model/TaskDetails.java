package com.example.springboot.crud.operation.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Setter
@Getter
public class TaskDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long TaskId;
    private String TaskTitle;
    private String discrption;
    private  String dueDate;
    private String priority;
    private String status;
//    @ManyToMany
//    @JoinTable(
//            name = "task_employee",
//            joinColumns = @JoinColumn(name = "task_id"),
//            inverseJoinColumns = @JoinColumn(name = "employee_id")
//    )


    @ManyToOne
    @JoinColumn(name = "EmployeeId")
    private Employee Employee;

    @Override
    public String toString() {
        return "TaskDetails{" +
                "TaskId=" + TaskId +
                ", TaskTitle='" + TaskTitle + '\'' +
                ", discrption='" + discrption + '\'' +
                ", dueDate='" + dueDate + '\'' +
                ", priority='" + priority + '\'' +
                ", status='" + status + '\'' +

                '}';
    }




    public Long getTaskId() {
        return TaskId;
    }

    public void setTaskId(Long taskId) {
        TaskId = taskId;
    }

    public String getTaskTitle() {
        return TaskTitle;
    }

    public void setTaskTitle(String taskTitle) {
        TaskTitle = taskTitle;
    }

    public String getDiscrption() {
        return discrption;
    }

    public void setDiscrption(String discrption) {
        this.discrption = discrption;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
