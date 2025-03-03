import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "../CSS/Cart.css";

const Cart = () => {
    const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);

    return (
        <div className="container">
            <div className="cart-container">
                <h2>🛒 سلة المشتريات</h2>
                {cart.length === 0 ? (
                    <p>السلة فارغة! <Link to="/">تصفح المنتجات</Link></p>
                ) : (
                    <>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id}>
                                    <img src={item.image} alt={item.name} />
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>💲 السعر: ${item.price}</p>
                                        <button onClick={() => removeFromCart(item.id)}>❌ إزالة</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <h3>💰 الإجمالي: ${getTotalPrice()}</h3>
                        <Link to="/checkout" className="checkout-btn">✅ إتمام الشراء</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;