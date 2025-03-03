import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Links.css';
import { Link } from 'react-router-dom';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Links = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);
    return (
        <div className='link-cont' ref={dropdownRef}>
            <FontAwesomeIcon icon={faList} size='lg' className='icon' onClick={() => setIsOpen(!isOpen)} />
            <ul className={`con ${isOpen ? "" : "none"}`}>
                <Link to="/">الرئيسية</Link>
                <Link to="/about">من نحن</Link>
                <Link to="/contact">تواصل معنا</Link>
                <Link to="/Products">المنتجات</Link>
                <Link to="/signup">إنشاء حساب</Link>
                <Link to="/login">تسجيل الدخول</Link>
            </ul>
        </div>
    )
}

export default Links;