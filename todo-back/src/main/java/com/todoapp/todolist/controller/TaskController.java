package com.todoapp.todolist.controller;


import com.todoapp.todolist.entity.Task;
import com.todoapp.todolist.entity.User;
import com.todoapp.todolist.service.TaskService;
import com.todoapp.todolist.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class TaskController {

    private final TaskService taskService;

    private final UserService userService;


    //WORKS
    @GetMapping("/tasks/{username}")
    List<Task> getAllTasks(@PathVariable(required = true) String username){
        return taskService.getAllTasks(userService.findUserByUsername(username));
    }

    //WORKS
    @DeleteMapping("/tasks/{id}")
    void deleteTask(@PathVariable(required = true) Long id){
        taskService.removeTask(id);
    }


    //WORKS
    @PostMapping("/taskCreate/{username}")
    void addTask(@PathVariable(required = true) String username, @RequestParam(required = true) String taskBody){
        taskService.addTask(userService.findUserByUsername(username), taskBody);
    }
}
