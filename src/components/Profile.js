import React, { useState, useEffect } from "react";
import "../CSS/Profile.css";

const Profile = () => {
    const [user, setUser] = useState({
        name: "محمد علي",
        email: "mohammed@example.com",
        joinDate: "2024-01-15",
        orders: [
            { id: 1, product: "هاتف مستعمل", price: 200, date: "2024-02-10" },
            { id: 2, product: "لابتوب مستعمل", price: 500, date: "2024-02-15" }
        ],
    });

    const [editMode, setEditMode] = useState(false);
    const [updatedName, setUpdatedName] = useState(user.name);
    const [updatedEmail, setUpdatedEmail] = useState(user.email);

    const handleSave = () => {
        setUser({ ...user, name: updatedName, email: updatedEmail });
        setEditMode(false);
    };

    return (
        <div className="container">
            <div className="profile-container">
                <h2>👤 الملف الشخصي</h2>

                {editMode ? (
                    <div className="edit-profile">
                        <label>👤 الاسم:</label>
                        <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />

                        <label>📧 البريد الإلكتروني:</label>
                        <input type="email" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} />

                        <button onClick={handleSave}>💾 حفظ التعديلات</button>
                        <button onClick={() => setEditMode(false)}>❌ إلغاء</button>
                    </div>
                ) : (
                    <div className="profile-details">
                        <p>👤 الاسم: {user.name}</p>
                        <p>📧 البريد الإلكتروني: {user.email}</p>
                        <p>📅 تاريخ الانضمام: {user.joinDate}</p>
                        <button onClick={() => setEditMode(true)}>✏ تعديل البيانات</button>
                    </div>
                )}

                <h3>📦 الطلبات السابقة</h3>
                <ul>
                    {user.orders.length > 0 ? (
                        user.orders.map((order) => (
                            <li key={order.id}>
                                <p>📦 المنتج: {order.product}</p>
                                <p>💲 السعر: ${order.price}</p>
                                <p>📅 التاريخ: {order.date}</p>
                            </li>
                        ))
                    ) : (
                        <p>لم تقم بأي طلبات بعد!</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Profile;