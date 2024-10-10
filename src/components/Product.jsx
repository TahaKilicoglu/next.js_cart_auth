// src/components/Product.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({ id: product.id, name: product.name, quantity: 1 })); // Sepete ekle
    };

    return (
        <div className="product">
            <h3>{product.name}</h3>
            <button onClick={handleAddToCart} className="add-to-cart-button">Sepete Ekle</button>
        </div>
    );
};

export default Product;
