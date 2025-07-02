package com.spring_and_react.SpringReact.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring_and_react.SpringReact.user.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
