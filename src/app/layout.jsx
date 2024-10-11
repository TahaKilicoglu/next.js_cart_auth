'use client'; // Client component olarak işaretleme
import React from 'react';
 import { Provider } from 'react-redux';
import store from '../redux/store'; 
import Header from '../components/Header'; // Header bileşenini içe aktar
import Footer from '../components/Footer'; // Footer bileşenini içe aktar
import '../styles/globals.css';

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>Your App Title</title>
                <meta name="description" content="Your app description" />
            </head>
            <body>
                     <Provider store={store}>
                        <div className="layout-container"> {/* Ana kapsayıcı div */}
                            <Header /> {/* Header bileşenini ekleyin */}
                            <main className="main-content">{children}</main>
                            <Footer /> {/* Footer bileşenini ekleyin */}
                        </div>
                    </Provider>
             </body>
        </html>
    );
};

export default Layout;
