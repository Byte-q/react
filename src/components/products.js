import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../CSS/Products.css";
const Products = ({ addToCart }) => {
    // 🛒 بيانات المنتجات (4 منتجات) 
    const products = [
        { id: 1, name: "هاتف سامسونج S21", price: 250, image: "https://source.unsplash.com/300x200/?smartphone" },
        { id: 2, name: "ساعة آبل", price: 150, image: "https://source.unsplash.com/300x200/?smartwatch" },
        { id: 3, name: "لابتوب ديل", price: 500, image: "https://source.unsplash.com/300x200/?laptop" },
        { id: 4, name: "كاميرا كانون", price: 300, image: "https://source.unsplash.com/300x200/?camera" }
    ];
    return (
        <div className="">
            <section className="products">
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>💵 {product.price}</p>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
export default Products;