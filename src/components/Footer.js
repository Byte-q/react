import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#">📄 حول المتجر</a>
                    <a href="#">🔒 سياسة الخصوصية</a>
                    <a href="#">📞 اتصل بنا</a>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐 فيسبوك</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 تويتر</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 إنستجرام</a>
                </div>
                <p>© {new Date().getFullYear()} جميع الحقوق محفوظة - متجر الأغراض المستعملة</p>
            </div>
        </footer>
    );
};

export default Footer;