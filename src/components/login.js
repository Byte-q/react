import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        // محاكاة تسجيل الدخول (في المستقبل يمكن التحقق من قاعدة البيانات) 
        if (email === "user@example.com" && password === "password") {
            alert("✅ تم تسجيل الدخول بنجاح!");
        } else {
            alert("❌ البريد الإلكتروني أو كلمة المرور غير صحيحة!");
        }
    };
    return (
        <div className="container">
            <section className="login-container">
                <h2>🔑 تسجيل الدخول</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <label>📧 البريد الإلكتروني:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>🔒 كلمة المرور:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">✅ تسجيل الدخول</button>
                </form>
                <p>ليس لديك حساب؟ <a href="/register">إنشاء حساب جديد</a></p>
            </section>
        </div>);
}; export default Login;