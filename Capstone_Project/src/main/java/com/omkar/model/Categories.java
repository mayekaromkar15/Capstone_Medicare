package com.omkar.model;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Categories {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long categoryId;
	private String categoryName;
	private String CategoryDescription;
	private String CategoryImagePath;
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
//	@JoinColumn(name = "cId" , referencedColumnName = "categoryId")
	@JsonIgnore
	private List<Product> products;
	
	public Categories() {
	}

	public Categories(Long categoryId, String categoryName, String categoryDescription, String categoryImagePath,
			List<Product> products) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		CategoryDescription = categoryDescription;
		CategoryImagePath = categoryImagePath;
		this.products = products;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getCategoryDescription() {
		return CategoryDescription;
	}

	public void setCategoryDescription(String categoryDescription) {
		CategoryDescription = categoryDescription;
	}

	public String getCategoryImagePath() {
		return CategoryImagePath;
	}

	public void setCategoryImagePath(String categoryImagePath) {
		CategoryImagePath = categoryImagePath;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	@Override
	public String toString() {
		return "Categories [categoryId=" + categoryId + ", categoryName=" + categoryName + ", CategoryDescription="
				+ CategoryDescription + ", CategoryImagePath=" + CategoryImagePath + ", products=" + products + "]";
	}

	
}
