// src/App.jsx
import React from 'react';
import Product from './components/Product';
import Cart from './components/Cart';

const products = [
    { id: 1, name: 'Ürün 1' },
    { id: 2, name: 'Ürün 2' },
];

const App = () => {
    return (
        <div>
            <h1>Ürünler</h1>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
            <Cart />
        </div>
    );
};

export default App;
