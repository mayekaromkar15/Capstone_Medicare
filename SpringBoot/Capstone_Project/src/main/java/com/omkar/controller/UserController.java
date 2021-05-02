package com.omkar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.omkar.entities.User;
import com.omkar.service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return this.userService.getUsers();
	}
	
	@PostMapping("/registerUser")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmailId();
		if(tempEmailId != null && !"".equals(tempEmailId)) {
			User userObj = userService.fetchUserByEmailId(tempEmailId);
			if(userObj !=null) {
				throw new Exception("User with "+tempEmailId+ " already exists ");
			}
		}
		User userObj = null;
		userObj = userService.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmailId();
		String tempPassword = user.getPassword();
		
		User userObj = null;
		if(tempEmail!=null && tempPassword!=null) {
			userObj = userService.fetchUserByEmailIdAndPassword(tempEmail,tempPassword );
		}
		if(userObj == null) {
			throw new Exception("Bad Credentials");
		}
		return userObj;
	}
}
