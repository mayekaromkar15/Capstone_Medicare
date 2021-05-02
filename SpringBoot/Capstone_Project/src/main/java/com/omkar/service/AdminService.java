package com.omkar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.omkar.entities.Admin;
import com.omkar.exception.ResourceNotFoundException;
import com.omkar.repo.AdminRepo;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepo userRepo;
	
	public List<Admin> getAllUsers(){
		return userRepo.findAll();
	}
	
	public Admin getUser(long userId) {
		return userRepo.findById(userId).
				orElseThrow(()->new ResourceNotFoundException("User not found with Id"+userId));
	}
	
	public Admin addUser(Admin user) {
		return userRepo.save(user);
	}
	
	public Admin updateUser(Admin user, long userId) {
		Admin existingUser = userRepo.findById(userId).
				orElseThrow(()-> new ResourceNotFoundException("User not found with Id"+userId));
		existingUser.setAge(user.getAge());
		existingUser.setEmailId(user.getEmailId());
		existingUser.setFirstName(user.getFirstName());
		existingUser.setLastName(user.getLastName());
		existingUser.setPassword(user.getPassword());
		userRepo.save(existingUser);
		return existingUser;
	}

	public Admin deleteUser(long userId) {
		Admin existingUser = userRepo.findById(userId).
				orElseThrow(() -> new ResourceNotFoundException("User Not found with Id "+userId));
		userRepo.delete(existingUser);
		return null;
	}
}
