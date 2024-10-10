// src/components/Cart.jsx
"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';
import '../styles/cart.css'; // Sepet CSS dosyası

const Cart = () => {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Sepetiniz</h2>
            {items.length === 0 ? (
                <p>Sepetinizde ürün yok.</p>
            ) : (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Ürün Adı</th>
                            <th>Fiyat</th>
                            <th>Adet</th>
                            <th>Toplam</th>
                            <th>İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>
                                    <div className="quantity-controls">
                                        <button 
                                            onClick={() => handleDecrement(item.id)} 
                                            className="quantity-btn"
                                            disabled={item.quantity === 1} // Adet 1 olduğunda azaltmayı devre dışı bırak
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleIncrement(item.id)} className="quantity-btn">+</button>
                                    </div>
                                </td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => handleRemove(item.id)} className="remove-btn">Tamamen Sil</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className="cart-total">
                <h3>Toplam Tutar: ${totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;
