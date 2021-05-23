package com.omkar.service.impl;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omkar.model.User;
import com.omkar.model.UserRole;
import com.omkar.repo.RoleRepository;
import com.omkar.repo.UserRepository;
import com.omkar.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
		User local = this.userRepository.findByUsername(user.getUsername());
		
		if(local!=null) {
			System.out.println("User is already there");
			throw new Exception("User already present");
		}
		else {
			for(UserRole ur:userRoles) {
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			
			local = this.userRepository.save(user);
			}
		return local;
	}

	@Override
	public List<User> findAllUsers() throws Exception {
		
		return userRepository.findAll();
	}

	@Override
	public User getUser(String userName) {
		
		return this.userRepository.findByUsername(userName);
	}
	
	

}
