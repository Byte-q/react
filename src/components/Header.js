import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css"; // ملف الأنماط (CSS)
import Userpic from "./userPic";
import Links from "./Links";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = ({ cartItemsCount }) => {
    return (
        <div className="header-container">
            <header className="header">
                <div className="logo">
                    <a to="/">Used</a>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="ابحث عن منتج..." />
                    <button className="btn">🔍</button>
                </div>
                <nav className="nav-links" id="nav-links">
                    <Link to="/cart" className="cart-icon"> <FontAwesomeIcon icon={faShoppingCart} size="lg" /> {cartItemsCount} </Link>
                    <Link to="/profile"><Userpic /></Link>
                </nav>
            </header >
            <Links />
        </div>
    );
};

export default Header; 