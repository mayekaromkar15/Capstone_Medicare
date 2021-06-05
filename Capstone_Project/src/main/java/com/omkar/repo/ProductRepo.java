package com.omkar.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.omkar.model.Categories;
import com.omkar.model.Product;


@Repository
public interface ProductRepo extends JpaRepository<Product, Long>{
	
//	@Query("select e.products from Categories e where categoryId")
//	@Query("from Product where productId = :cid")
//	@Query("select new com.omkar.model.Product(p as Name, "
//			+ "from Product p")
//			+ "group by p.category.id")
//	@Query("Select new com.omkar.model.Product(p.productName, p.productDescription,"
//			+ "p.long productPrice) "
//			+ "from Product p where category.categoryId = :cid")
//	SELECT e.phones FROM Employee e
	@Query("Select p from Product p where category.categoryId = :cid")
	List<Product> getProductByCategory(@Param("cid") Long cId);

	@Query("SELECT COUNT(u) FROM Product u")
	long getProductCount();
}
