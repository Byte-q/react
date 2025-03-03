import React, { useState } from "react";
import "../CSS/Contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`✅ تم إرسال رسالتك بنجاح! شكرًا لك، ${name}.`);
        setName("");
        setEmail("");
        setMessage("");
    };
    return (
        <div className="contact">
            <section className="contact-container">
                <h2>📞 اتصل بنا</h2>
                <p>إذا كان لديك أي استفسارات، لا تتردد في التواصل معنا.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>👤 الاسم الكامل:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label>📧 البريد الإلكتروني:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>✉️ رسالتك:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                    <button type="submit">📨 إرسال</button>
                </form>
                <div className="contact-info">
                    <h3>📍 معلومات التواصل</h3>
                    <p>📧 البريد الإلكتروني: support@example.com</p>
                    <p>📞 الهاتف: +123 456 789</p>
                    <p>📍 العنوان: شارع المتجر، المدينة، الدولة</p>
                </div>
            </section>
        </div>);
}; export default Contact;