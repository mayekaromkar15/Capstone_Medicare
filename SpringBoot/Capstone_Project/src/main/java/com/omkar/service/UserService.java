package com.omkar.service;

import java.util.List;
import java.util.Set;

import com.omkar.model.User;
import com.omkar.model.UserRole;

public interface UserService {

	//creating user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	public List<User> findAllUsers() throws Exception;
	public User getUser(String userName);
	public long getUserCount();
}
