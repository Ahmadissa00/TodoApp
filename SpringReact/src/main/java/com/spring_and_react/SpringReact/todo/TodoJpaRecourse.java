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

import com.spring_and_react.SpringReact.todo.repository.TodoRepository;

@RestController
public class TodoJpaRecourse {
	
	public TodoService todoService;
	
  	public TodoRepository todoRepository;

	public TodoJpaRecourse(TodoService todoService,TodoRepository todoRepository) {
		super();
		this.todoService = todoService;
		this.todoRepository = todoRepository;
	}



	@GetMapping("/users/{username}/todos")
	public List<Todo> retrieveTodos(@PathVariable String username) {
		
		//return todoService.findByUserName(name);
		return todoRepository.findByUsername(username);
		
	}
	
	@GetMapping("/users/{name}/todos/{id}")
	public Todo retrieveTodoById(@PathVariable Integer id,@PathVariable String name) {
		
		return todoRepository.findById(id).get();
		//return todoService.findByID(id);
		
	}
	
	@DeleteMapping("/users/{name}/todos/{id}")
	public ResponseEntity<Void> deleteTodoById(@PathVariable Integer id,@PathVariable String name) {
	 	
		todoRepository.deleteById(id);
		
		
		 //todoService.deleteTodo(id);
		 return ResponseEntity.noContent().build();
		
	}
	
	@PutMapping("/users/{name}/todos/{id}")
	public Todo updateTodo(@PathVariable String name ,@PathVariable Integer id ,@RequestBody Todo todo) {
		//todoService.updateTodo(todo);
		todoRepository.save(todo);
		return todo;
		
	}
	
	@PostMapping("/users/{name}/todos")
	public Todo createTodo(@PathVariable String name ,@RequestBody Todo todo) {
		
		todo.setUsername(name);
		todo.setId(null);
		
		return todoRepository.save(todo);
		
//		
//		Todo createdTodo = todoService.addTodo(name , todo.getDescrption(),todo.isDone(),todo.getDate());
//		
//		return createdTodo;
//		
	}
	
	
	
}
