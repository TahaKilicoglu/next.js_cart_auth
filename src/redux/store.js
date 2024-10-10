// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Sepet diliminiz

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
