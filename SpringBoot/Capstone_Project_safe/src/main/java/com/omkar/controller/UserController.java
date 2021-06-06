package com.omkar.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omkar.model.Role;
import com.omkar.model.User;
import com.omkar.model.UserRole;
import com.omkar.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {
		
		Role role1 = new Role();
		role1.setRoleId(45L);
		role1.setRoleName("NORMAL");
		
		// encoding password with bcrytp password encoder.
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		
		
		Set<UserRole> userRoleSet = new HashSet<>();
		UserRole userRole = new UserRole();
		userRole.setRole(role1);
		userRole.setUser(user);
		userRoleSet.add(userRole);
		
		User createUser = this.userService.createUser(user, userRoleSet);
		System.out.println(createUser);
		
		return createUser;
	}
	
	@GetMapping("/")
	public List<User> findAllUsers() throws Exception{
		return this.userService.findAllUsers();
	}
	
	@GetMapping("/{userName}")
	public User getUser(@PathVariable String userName) {
		return this.userService.getUser(userName);
	}
}
