package com.spring_and_react.SpringReact.todo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//@RestController
public class TodoRecourse {
	
	public TodoService todoService;
	
  	

	public TodoRecourse(TodoService todoService) {
		super();
		this.todoService = todoService;
	}



	@GetMapping("/users/{name}/todos")
	public List<Todo> retrieveTodos(@PathVariable String name) {
		
		return todoService.findByUserName(name);
		
	}
	
	@GetMapping("/users/{name}/todos/{id}")
	public Todo retrieveTodoById(@PathVariable int id,@PathVariable String name) {
		
		return todoService.findByID(id);
		
	}
	
	@DeleteMapping("/users/{name}/todos/{id}")
	public ResponseEntity<Void> deleteTodoById(@PathVariable int id,@PathVariable String name) {
		
		 todoService.deleteTodo(id);
		 return ResponseEntity.noContent().build();
		
	}
	
	@PutMapping("/users/{name}/todos/{id}")
	public Todo updateTodo(@PathVariable String name ,@PathVariable int id ,@RequestBody Todo todo) {
		todoService.updateTodo(todo);
		
		return todo;
		
	}
	
	@PostMapping("/users/{name}/todos")
	public Todo createTodo(@PathVariable String name ,@RequestBody Todo todo) {
		Todo createdTodo = todoService.addTodo(name , todo.getDescrption(),todo.isDone(),todo.getDate());
		
		return createdTodo;
		
	}
	
	
	
}
