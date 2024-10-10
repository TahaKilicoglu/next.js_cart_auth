// src/components/ProductList.jsx
"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import '../styles/productList.css'; // Ürün listesi CSS dosyası

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [popups, setPopups] = useState([]); // Pop-up'lar için dizi
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products'); // API URL'sini buraya ekleyin
                const data = await response.json();
                setProducts(data.products); // API'deki `products` dizisini kullan
            } catch (error) {
                console.error('Ürünleri çekerken hata oluştu:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        dispatch(addItem({ id: product.id, name: product.title, price: product.price, quantity: 1 }));

        const newPopup = { id: Date.now(), productName: product.title }; // Yeni pop-up nesnesi oluştur
        setPopups(prevPopups => [...prevPopups, newPopup]); // Yeni pop-up'ı diziye ekle

        setTimeout(() => {
            setPopups(prevPopups => prevPopups.filter(popup => popup.id !== newPopup.id)); // 3 saniye sonra pop-up'ı sil
        }, 3000);
    };

    return (
        <div className="product-list">
            <h2>Tüm Ürünler</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ürün Adı</th>
                        <th>Fiyat</th>
                        <th>Stok Adedi</th>
                        <th>Sepete Ekle</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={() => handleAddToCart(product)}>Sepete Ekle</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pop-up'ları listele */}
            <div className="popups-container">
                {popups.map(popup => (
                    <div key={popup.id} className="popup">
                        &quot;{popup.productName}&quot; başarıyla sepete eklendi!
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
