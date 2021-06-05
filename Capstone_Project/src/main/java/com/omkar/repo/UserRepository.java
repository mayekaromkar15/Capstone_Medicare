package com.omkar.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.omkar.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByUsername(String username);
	
	@Query("SELECT COUNT(u) FROM users u")
	public long getUserCount();
}
