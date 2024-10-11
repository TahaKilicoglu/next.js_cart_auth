"use client";

import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList"; // MovieList bileşenini içe aktar
import "../styles/movielist.css"; // CSS dosyasını içe aktarma

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null); // Hata durumu için state ekleniyor

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY; // .env.local'dan API anahtarını al
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("API Response:", data); // API'den gelen yanıtı konsola yazdır
        setMovies(data.results || []); // Boş bir dizi döndür
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message); // Hata mesajını kaydet
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {error && <p className="error-message">Error fetching movies: {error}</p>}{" "}
      {/* Hata durumunu göster */}
      <MovieList movies={movies} /> {/* MovieList bileşenini burada kullan */}
    </div>
  );
};

export default Home;
