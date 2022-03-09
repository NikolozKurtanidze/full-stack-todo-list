package com.todoapp.todolist.service;

import com.todoapp.todolist.entity.User;
import com.todoapp.todolist.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public boolean checkUser(String username, String pwd){
        return userRepository.findAll().stream().anyMatch(x -> x.getUsername().equals(username) && x.getPwd().equals(pwd));
    }

    public Long findUserByUsername(String username){
        return userRepository
                .findAll()
                .stream()
                .filter(x -> x.getUsername().equals(username))
                .findFirst()
                .get()
                .getUserId();
    }

    public void addUser(String username, String pwd) {
        userRepository.save(
                User.builder()
                .username(username)
                .pwd(pwd)
                .build());
    }
}
