package com.spring_and_react.SpringReact.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring_and_react.SpringReact.todo.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
	
	List<Todo> findByUsername(String username);

}
