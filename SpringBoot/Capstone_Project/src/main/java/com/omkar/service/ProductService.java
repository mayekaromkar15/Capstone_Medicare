package com.omkar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.omkar.exception.ResourceNotFoundException;
import com.omkar.model.Product;
import com.omkar.repo.ProductRepo;

@Service
public class ProductService {

	@Autowired
	private ProductRepo productRepo;

	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}
	
	public List<Product> getProductsByCategory(Long categoryId) {
		return productRepo.getProductByCategory(categoryId);
	}

	public ResponseEntity<Product> getProduct(long productId) {
		Product p = productRepo.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with Id " + productId));

		return ResponseEntity.ok(p);
	}

	public ResponseEntity<Product> updateProduct(long productId, Product productDetails) {
		Product existingProduct = productRepo.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with Id " + productId));
		existingProduct.setProductName(productDetails.getProductName());
		existingProduct.setProductDescription(productDetails.getProductDescription());
		existingProduct.setProductPrice(productDetails.getProductPrice());
		
		Product updatedProduct = productRepo.save(existingProduct);
		return ResponseEntity.ok(updatedProduct);
	}
	
	
	public Product addProduct(Product product) {
		return productRepo.save(product);
	}

	public void deleteProduct(long productId) {
		productRepo.deleteById(productId);
	}

	public long getProductCount() {
		return this.productRepo.getProductCount();
	}
}
