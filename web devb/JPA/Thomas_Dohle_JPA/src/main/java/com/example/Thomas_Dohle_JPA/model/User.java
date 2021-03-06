package com.example.Thomas_Dohle_JPA.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String role;
	
	@OneToMany(mappedBy="author")
	private List<Course> courses = new ArrayList<>();
	
	public User() {}
	public User(int id, String username, String password, String firstName, String lastName, String role) {
		this.id = id;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.role = role;
	}
	public User(String username, String firstName, String lastName, String password,  String role) {
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.role = role;
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
	public String getPassword() {
		return password;
	}
	public List<Course> getCourses(){return this.courses;};
	
	public void setPassword(String password) {
		this.password = password;
	}
	public void addCourse(Course c) {this.courses.add(c);}
	
	public void removeCourse(Course c) {this.courses.remove(c);}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getRole() {
		return this.role;
	}
	public void setRole(String role) {
		if (role.equals("STUDENT") || role.equals("FACULTY")) {
			this.role=role;
		}
	}
	@Override
	public String toString() {
		return "Username: " + this.getUsername() + " pw: " + this.getPassword();
	}
}