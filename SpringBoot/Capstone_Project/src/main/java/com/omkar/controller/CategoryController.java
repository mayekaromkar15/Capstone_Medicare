package com.omkar.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.omkar.model.Categories;
import com.omkar.model.Product;
import com.omkar.service.CategoryService;
import com.omkar.service.ProductService;

@RestController
@CrossOrigin("*")
public class CategoryController {
	

	@Autowired
	private CategoryService categoryService;

	@GetMapping("/categories")
	public List<Categories> getAllCategories(){
		return this.categoryService.getAllCategories();
	}
	
	@GetMapping("/categories/{categoryId}")
	public ResponseEntity<Categories> getCategory(@PathVariable long categoryId) {
		return this.categoryService.getCategory(categoryId);
	}
	
	
	@PutMapping("/categories/{categoryId}")
	public ResponseEntity<Categories> updateCategory(@PathVariable long categoryId,@RequestBody Categories categoryDetails) {
		return this.categoryService.updateCategory(categoryId, categoryDetails);
	}
	
	
//	@PostMapping("/categories")
//	@RequestMapping(method = RequestMethod.POST, path = "/categories", 
////			headers = "content-type=multipart/*", 
//			consumes = MediaType.APPLICATION_JSON_VALUE)
//	@PostMapping(
//		    value = "/categories",
//		    produces = MediaType.APPLICATION_JSON_VALUE,
//		    consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
//	public ResponseEntity<Categories> handleFileUpload(@RequestParam("category") Categories category, @RequestPart("file") MultipartFile file) {
//	    // do something with User and file
//	    return ResponseEntity.ok().build();
//	}
	
	@PostMapping("/categories")
	public Categories addCategory(@RequestBody Categories category){
		String fileName = category.getCategoryImagePath();
		String updatedFilePath = "../../../../assets/img/" + fileName;
		category.setCategoryImagePath(updatedFilePath);
		return this.categoryService.addCategory(category);
	}
	
	@DeleteMapping("/categories/{categoryId}")
	public void deleteCategory(@PathVariable long categoryId) {
		this.categoryService.deleteCategory(categoryId);
	}
	
	@GetMapping("/categoryCount")
	public long getCategoryCount() throws Exception{
		return this.categoryService.getCategoryCount();
	}
}
