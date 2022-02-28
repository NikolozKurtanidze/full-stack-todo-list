package com.todoapp.todolist.controller;


import com.todoapp.todolist.entity.User;
import com.todoapp.todolist.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class UserController {

    private final UserService userService;

    //WORKS
    @PostMapping("/checkUser")
    boolean checkUser(@RequestBody(required = true) User user){
        return userService.checkUser(user.getUsername(), user.getPwd());
    }
}
