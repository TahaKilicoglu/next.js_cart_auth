'use client'; // Client component olarak işaretleme
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMovie } from '../../redux/watchlistSlice'; // Doğru import ifadesi
import '../../styles/watchlist.css'; // Doğru import ifadesi

const Watchlist = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.watchlist.movies); // Redux'tan filmleri al

    const handleRemoveFromWatchlist = (movieId) => {
        dispatch(removeMovie(movieId)); // Film kaldırma işlemi
    };

    return (
        <div>
            <h2>Your Watchlist</h2>
            <div className="movie-list">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="movie-item">
                            <img 
                                className="movie-poster" 
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                alt={movie.title} 
                            />
                            <div className="movie-rating">
                                ⭐ {movie.vote_average.toFixed(2)} {/* Rating gösterimi */}
                            </div>
                            <div className="movie-info">
                                <h3 className="movie-title">{movie.title}</h3> {/* Film adı */}
                                <button 
                                    className="remove-button" 
                                    onClick={() => handleRemoveFromWatchlist(movie.id)}>
                                    Remove from Watchlist
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your watchlist is empty.</p> // Boş dizinin durumu
                )}
            </div>
        </div>
    );
};

export default Watchlist;
