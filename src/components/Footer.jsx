'use client';
import React from 'react';
import '../styles/footer.css'; // CSS dosyasını eklemeyi unutmayın

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My Movie App. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
