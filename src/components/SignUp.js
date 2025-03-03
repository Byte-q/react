import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/SignUp.css";
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("❌ كلمة المرور غير متطابقة!");
            return;
        }
        // هنا يمكن إرسال البيانات إلى السيرفر 
        console.log({ username, email, password });
        alert("✅ تم إنشاء الحساب بنجاح!");
        navigate("/login"); // تحويل المستخدم إلى صفحة تسجيل الدخول 
    };
    return (
        <div className="container">
            <div className="signup-container">
                <h2>📝 إنشاء حساب</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label>👤 اسم المستخدم:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <label>📧 البريد الإلكتروني:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>🔑 كلمة المرور:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label>🔒 تأكيد كلمة المرور:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <button type="submit">✅ إنشاء الحساب</button>
                </form>
                <p>لديك حساب بالفعل؟ <a href="/login">تسجيل الدخول</a></p>
            </div>
        </div>
    );
};

export default SignUp;