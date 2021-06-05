package com.omkar.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.omkar.exception.ResourceNotFoundException;
import com.omkar.model.Categories;
import com.omkar.model.Product;
import com.omkar.repo.CategoryRepo;

@Service
public class CategoryService {


	@Autowired
	private CategoryRepo categoryRepo;

	public List<Categories> getAllCategories() {
		return categoryRepo.findAll();
	}

	public ResponseEntity<Categories> getCategory(long categoryId) {
		Categories p = categoryRepo.findById(categoryId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with Id " + categoryId));

		return ResponseEntity.ok(p);
	}
	
	public Categories getCategoryByName(String categoryName) {
		Categories p = categoryRepo.findByName(categoryName);

		return p;
	}

	public ResponseEntity<Categories> updateCategory(long categoryId, Categories categoryDetails) {
		Categories existingProduct = categoryRepo.findById(categoryId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with Id " + categoryId));
		existingProduct.setCategoryName(categoryDetails.getCategoryName());
		existingProduct.setCategoryDescription(categoryDetails.getCategoryDescription());
		
		Categories updatedProduct = categoryRepo.save(existingProduct);
		return ResponseEntity.ok(updatedProduct);
	}
	
	
//	public Categories addCategory(Categories category,  MultipartFile file) {
//		Categories existingCategory = categoryRepo.findById(category.getCategoryId())
//				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with Id " + category.getCategoryId()));
//		existingCategory.setCategoryImagePath(file.getOriginalFilename());
//		return categoryRepo.save(existingCategory);
//	}
	
	
	public Categories addCategory(Categories category) {
		return categoryRepo.save(category);
	}

	public void deleteCategory(long categoryId) {
		categoryRepo.deleteById(categoryId);
	}

	public long getCategoryCount() {
		return this.categoryRepo.getCategoryCount();
	}
}
