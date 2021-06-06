package com.omkar.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.omkar.model.Categories;

@Repository
public interface CategoryRepo extends JpaRepository<Categories, Long>{

	@Query("SELECT COUNT(u) FROM Categories u")
	public long getCategoryCount();
	
	@Query("SELECT c FROM Categories c WHERE c.categoryName=?1")
	Categories findByName(String name);

}
