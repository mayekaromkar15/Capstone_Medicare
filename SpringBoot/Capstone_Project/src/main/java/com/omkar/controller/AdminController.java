package com.omkar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.omkar.entities.Admin;
import com.omkar.service.AdminService;

@RestController
public class AdminController {
	
	@Autowired
	private AdminService userService;
	
	
	@GetMapping("/admin")
	public List<Admin> getAllUsers() {
		return this.userService.getAllUsers();
		
	}
	
	@GetMapping("/admin/{adminId}")
	public Admin getUser(@PathVariable long adminId) {
		return this.userService.getUser(adminId);
		
	}
	
	@PostMapping("/admin")
	public Admin addUser(@RequestBody Admin admin) {
		return this.userService.addUser(admin);
		
	}
	
	@PutMapping("/users/{userId}")
	public Admin updateUser(@RequestBody Admin user, @PathVariable long userId) {
		return this.userService.updateUser(user, userId);
	}
	
	@DeleteMapping("/users/{userId}")
	public Admin deleteUser(@PathVariable long userId) {
		return this.userService.deleteUser(userId);
	}
	
	
}
