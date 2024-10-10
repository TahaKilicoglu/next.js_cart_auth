// src/components/Header.jsx
import React from 'react';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import './Header.css'; // CSS dosyanızı burada dahil edin

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link href="/">Ana Sayfa</Link>
                <Link href="/cart">Sepet</Link>
            </nav>
            <div className="auth-buttons">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
    );
};

export default Header;
