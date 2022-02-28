package com.todoapp.todolist.repository;

import com.todoapp.todolist.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TaskRepository extends JpaRepository<Task, Long> {
}
