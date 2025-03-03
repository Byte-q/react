import React, { useState } from "react";
import "../CSS/Checkout.css";

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("✅ تم إتمام الطلب بنجاح!");
    };

    return (
        <div className="check-con">
            <div className="checkout-container">
                <h2>🛒 إتمام الشراء</h2>

                <form onSubmit={handleSubmit}>
                    <h3>📍 معلومات الشحن</h3>
                    <input type="text" name="name" placeholder="الاسم الكامل" onChange={handleChange} required />
                    <input type="text" name="address" placeholder="العنوان" onChange={handleChange} required />
                    <input type="text" name="city" placeholder="المدينة" onChange={handleChange} required />

                    <h3>💳 معلومات الدفع</h3>
                    <input type="text" name="cardNumber" placeholder="رقم البطاقة" maxLength="16" onChange={handleChange} required />
                    <input type="text" name="expiry" placeholder="تاريخ الانتهاء (MM/YY)" maxLength="5" onChange={handleChange} required />
                    <input type="text" name="cvv" placeholder="CVV" maxLength="3" onChange={handleChange} required />

                    <button type="submit">✅ إتمام الدفع</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;