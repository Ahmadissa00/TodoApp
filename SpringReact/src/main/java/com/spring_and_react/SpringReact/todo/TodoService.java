package com.spring_and_react.SpringReact.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;


@Service
public class TodoService {
	private static List <Todo> todos = new ArrayList<Todo>();
	private static int count = 0;
	
	static {
		todos.add(new Todo(count++,"Ahmad","Spring",false,LocalDate.now().plusYears(1)));
		todos.add(new Todo(count++,"Ahmad","Web",false,LocalDate.now().plusYears(2)));
		todos.add(new Todo(count++,"Issa","AWS",false,LocalDate.now().plusYears(3)));
		todos.add(new Todo(count++,"Ahmad","Java",false,LocalDate.now().plusYears(7)));
	}
	
	public List<Todo> findByUserName(String userName){
		Predicate<? super Todo> predicate = todo -> todo.getUsername().equalsIgnoreCase(userName);
		return todos.stream().filter(predicate).toList();
	}

	public Todo findByID(int id){
		Predicate<? super Todo> predicate = todo -> todo.getId()==id;
		Todo todo= todos.stream().filter(predicate).findFirst().get();
		return todo;
	}

	public Todo addTodo(String username,String description,boolean done,LocalDate date) {
		Todo todo = new Todo(count++,username,description,done,date);
		todos.add(todo);
		
		return todo;
		
	}
	
	public void deleteTodo(int id) {
		Predicate<? super Todo> predicate = todo -> todo.getId()==id;
		todos.removeIf(predicate);
	}

	public void updateTodo(@Validated Todo todo) {
		deleteTodo(todo.getId());
		todos.add(todo);
		
	}
}
