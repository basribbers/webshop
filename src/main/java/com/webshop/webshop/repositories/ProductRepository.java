package com.webshop.webshop.repositories;
import com.webshop.webshop.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ProductRepository extends JpaRepository<Product,Long> {
}
