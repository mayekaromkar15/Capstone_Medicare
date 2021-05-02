package com.omkar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omkar.entities.User;
import com.omkar.repo.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	public List<User> getUsers(){
		return userRepo.findAll();
	}
	
	public User saveUser(User user) {
		return userRepo.save(user);
	}
	
	public User fetchUserByEmailId(String user) {
		return userRepo.findByEmailId(user);

	}
	
	public User fetchUserByEmailIdAndPassword(String tempEmail, String tempPassword) {
		return userRepo.findByEmailIdAndPassword(tempEmail, tempPassword);
	}
	
}
