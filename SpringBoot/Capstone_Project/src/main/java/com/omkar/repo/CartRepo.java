package com.omkar.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.omkar.model.Cart;
import com.omkar.model.Product;
import com.omkar.model.User;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long>{
	
	@Query("SELECT p from Product p join Cart c on p = c.product where c.user=?1")
	List<Product> getCartProductsByUser(User user);
}
