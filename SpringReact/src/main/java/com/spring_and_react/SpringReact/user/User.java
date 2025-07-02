package com.spring_and_react.SpringReact.user;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spring_and_react.SpringReact.todo.Todo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;

@Entity
public class User {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	@Size(min = 3)
	private String username;
	@Past
	private LocalDate birthDate;
	@Email
	private String email;
	
	@OneToMany(mappedBy = "username")
	@JsonIgnore
	private List<Todo> userTodos;
	
	public User(Integer id, @Size(min = 3) String username, @Past LocalDate birthDate, @Email String email) {
		super();
		this.id = id;
		this.username = username;
		this.birthDate = birthDate;
		this.email = email;
	}
	
	public User() {
		super();
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public LocalDate getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	
	
	
	

}
