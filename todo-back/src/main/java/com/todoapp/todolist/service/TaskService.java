package com.todoapp.todolist.service;


import com.todoapp.todolist.entity.Task;
import com.todoapp.todolist.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;


    public void addTask(Long userId, String taskBody){
        if(taskBody == null || taskBody.isEmpty()) return;
        taskRepository.save(Task.builder()
                .taskBody(taskBody)
                .userId(userId)
                .build());
    }

    public void removeTask(Long taskId){
        taskRepository.deleteById(taskId);
    }

    public List<Task> getAllTasks(Long userId){
        return taskRepository.findAll()
                .stream()
                .filter(x -> x.getUserId().equals(userId))
                .collect(Collectors.toList());
    }

}
