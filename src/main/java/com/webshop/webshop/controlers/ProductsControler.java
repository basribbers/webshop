package com.webshop.webshop.controlers;

import com.webshop.webshop.Response;
import com.webshop.webshop.models.Product;
import com.webshop.webshop.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController

@RequestMapping ("/products")
public class ProductsControler {
    @Autowired
    private ProductRepository productRepository;

@GetMapping("/{id}")
public Product get(@PathVariable long id) {System.out.println("eentje");
    Optional<Product> product =  productRepository.findById(id);
   return  product.get();
}

@PostMapping
@ResponseStatus(HttpStatus.CREATED)
public ResponseEntity<Response> create(@Valid @RequestBody final Product product)
{
        productRepository.saveAndFlush(product);
    long id = product.getProd_id();
    HttpHeaders httpHeaders = new HttpHeaders();
    Response resp = new Response(id,"OK", "Success");
    return new ResponseEntity<Response>(resp, httpHeaders, HttpStatus.CREATED);}


@GetMapping
    List<Product> list() {

        return productRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteProduct (@PathVariable Long id){productRepository.deleteById(id);}

}
