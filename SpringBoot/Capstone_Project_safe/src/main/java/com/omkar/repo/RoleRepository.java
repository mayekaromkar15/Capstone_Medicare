package com.omkar.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.omkar.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
