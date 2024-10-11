import React from 'react';
import { useSelector } from 'react-redux'; // Redux'tan izleme listesini çekeceğiz
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.items); // İzleme listesindeki filmler

  return (
    <div>
      <Header />
      <div className="watchlist-container">
        <h1>İzleme Listeniz</h1>
        <div className="watchlist-grid">
          {watchlist.map((movie) => (
            <div key={movie.id} className="watchlist-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="watchlist-poster"
              />
              <h3>{movie.title}</h3>
              <p className="movie-rating">
                ⭐ {movie.vote_average.toFixed(1)} / 10
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Watchlist;
