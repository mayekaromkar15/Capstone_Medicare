package com.omkar.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.omkar.entities.User;


@Repository
public interface UserRepo extends JpaRepository<User, Long> {
	public User findByEmailId(String emailId);
	public User findByEmailIdAndPassword(String tempEmail, String tempPassword);
}
