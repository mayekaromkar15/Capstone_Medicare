package com.omkar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.omkar.model.Cart;
import com.omkar.model.Categories;
import com.omkar.model.Product;
import com.omkar.model.User;
import com.omkar.repo.CartRepo;
import com.omkar.service.CategoryService;
import com.omkar.service.ProductService;
import com.omkar.service.UserService;

@RestController
@CrossOrigin("*")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private UserService userService;
	
	@Autowired 
	private CartRepo cartRepo;
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return this.productService.getAllProducts();
	}
	
	@GetMapping("/products/{productId}")
	public ResponseEntity<Product> getProduct(@PathVariable long productId) {
		return this.productService.getProduct(productId);
	}
	
	@GetMapping("/product/{productId}")
	public List<Product> getProductByCategory(@PathVariable Long productId){
		return this.productService.getProductsByCategory(productId);
	}
	
	@PutMapping("/products/{productId}")
	public ResponseEntity<Product> updateProduct(@PathVariable long productId,@RequestBody Product productDetails) {
		return this.productService.updateProduct(productId, productDetails);
	}
	
	
	@PostMapping("/products")
	public Product addProduct(@RequestBody Product product) {
		Categories category = categoryService.getCategoryByName(product.getProductCategory());
		product.setCategory(category);
		return this.productService.addProduct(product);
	}
	
	@DeleteMapping("/products/{productId}")
	public void deleteProduct(@PathVariable long productId) {
		this.productService.deleteProduct(productId);
	}
	
	@GetMapping("/productCount")
	public long getProductCount() throws Exception{
		return this.productService.getProductCount();
	}
	
	@PostMapping("/addToCart/{userName}")
	public void addToCart(@RequestBody Product product, @PathVariable String userName) {
		User user = userService.getUser(userName);
		Cart cart = new Cart();
		cart.setProduct(product);
		cart.setUser(user);
		cartRepo.save(cart);
	}
	
	@GetMapping("/getCartProducts/{userName}")
	public List<Product> getCartProducts(@PathVariable String userName) throws Exception{
		User user = userService.getUser(userName);
		return this.cartRepo.getCartProductsByUser(user);
	}
}
