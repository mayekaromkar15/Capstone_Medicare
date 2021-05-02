package com.omkar.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.omkar.entities.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long>{

}
