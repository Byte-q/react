import React, { useContext } from "react";
import { CartContext } from "./CartContext";
// import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-button">
            <button onClick={() => addToCart(product)}>🛒 إضافة إلى السلة</button>
        </div>
    );
};

export default ProductCard;