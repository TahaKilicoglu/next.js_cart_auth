"use client";

import Link from "next/link";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
       <nav>
        <Link href="/">Ana Sayfa</Link>
        <Link href="/watchlist">Takip Listesi</Link>
      </nav>
    </header>
  );
};

export default Header;
