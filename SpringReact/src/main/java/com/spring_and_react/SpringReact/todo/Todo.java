package com.spring_and_react.SpringReact.todo;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spring_and_react.SpringReact.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;


@Entity
public class Todo {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String descrption;
	private boolean done;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private User user;
	
	
	private String username;
	
	private LocalDate date_;
	
	public Todo() {}

	public Todo(Integer id, String username, String descrption,boolean done, LocalDate date) {
		super();
		this.id = id;
		this.descrption = descrption;
		this.done = done;
		this.username = username;
		this.date_ = date;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescrption() {
		return descrption;
	}

	public void setDescrption(String descrption) {
		this.descrption = descrption;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public LocalDate getDate() {
		return date_;
	}

	public void setDate(LocalDate date) {
		this.date_ = date;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", descrption=" + descrption + ", done=" + done + ", username=" + username + ", date="
				+ date_ + "]";
	}

}
