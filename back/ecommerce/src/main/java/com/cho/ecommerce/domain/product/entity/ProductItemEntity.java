package com.cho.ecommerce.domain.product.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "PRODUCT_ITEM")
@Setter
@Getter
public class ProductItemEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_ITEM_ID")
    private Long productItemId;
    
    @NotNull(message = "Quantity is required")
    @Column(name = "QUANTITY")
    private Integer quantity;
    
    @NotNull(message = "Price is required")
    @Column(name = "PRICE")
    private Double price;
    
    @NotNull(message = "Product is required")
    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID")
    private ProductEntity product;
    
    @NotEmpty(message = "Product item must have at least one product option variation")
    @OneToMany(mappedBy = "productItem")
    private Set<ProductOptionVariationEntity> productOptionVariations;
    
//    @NotEmpty(message = "Product item must have at least one discount") //product may not have discount
    @OneToMany(mappedBy = "productItem", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DiscountEntity> discounts = new ArrayList<>();
}

