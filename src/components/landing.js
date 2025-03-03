import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Landing.css";
const Landing = () => {
    return (
        <section className="landing">
            <div className="landing-content">
                <h1>مرحبًا بك في متجر الأغراض المستعملة</h1>
                <p>بيع وشراء المنتجات المستعملة بسهولة وأمان!</p>
                {/* <Link to="/products" className="explore-btn">تصفح المنتجات 🛒</Link> */}
            </div>
        </section>
    );
};
export default Landing; 