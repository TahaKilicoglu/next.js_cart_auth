// src/app/layout.jsx
"use client"; // İstemci bileşeni olduğunu belirtin

import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Redux store'unuzun yolu
import Header from '../components/Header'; // Header bileşeninizin yolu
import '../styles/globals.css'; // CSS dosyanızın yolu

const Layout = ({ children }) => {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <Provider store={store}>
                        <Header />
                        <main>{children}</main>
                    </Provider>
                </body>
            </html>
        </ClerkProvider>
    );
};

export default Layout;
