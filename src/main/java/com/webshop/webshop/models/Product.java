package com.webshop.webshop.models;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity (name = "product")
public class Product {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long prod_id;

@NotBlank (message = "Mag niet leeg zijn")
@Size(min=3, max=40, message = "Moet minimaal 8 en maximaal 40 letters bevatten")
@Pattern(regexp = "^[a-zA-Z]*$", message = "mag alleen letters bevatten")
 private String prod_naam;

@Min(value = 2, message = "Prijs minimaal 2 euro")
private long prod_prijs;

    public Product() {    }

    public Long getProd_id() {
        return prod_id;
    }

    public String getProd_naam() {
        return prod_naam;
    }

   public long getProd_prijs() {
        return prod_prijs;
    }

    public void setProd_id(Long prod_id) {System.out.println("set id");
        this.prod_id = prod_id;
    }

    public void setProd_naam(String prod_naam) {
        this.prod_naam = prod_naam;
    }

    public void setProd_prijs(long prod_prijs) {
        this.prod_prijs = prod_prijs;
    }
}
