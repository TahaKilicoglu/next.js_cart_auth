import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../redux/watchlistSlice";
import '../styles/movielist.css'; // CSS dosyasını içe aktarma

const MovieList = ({ movies }) => {
  const dispatch = useDispatch();
  // Redux'tan mevcut watchlist'i al
  const existingMovies = useSelector((state) => state.watchlist.movies);

  const handleAddMovie = (movie) => {
    // Daha önce eklendi mi kontrol et
    const isMovieInWatchlist = existingMovies.some((m) => m.id === movie.id);
    
    if (!isMovieInWatchlist) {
      dispatch(addMovie(movie));
      console.log("Added to watchlist:", movie); // Konsola eklenen filmi yazdır
    } else {
      console.log("Movie already in watchlist:", movie); // Zaten eklendi uyarısı
    }
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info"> {/* Film bilgileri */}
            <h3 className="movie-title">{movie.title}</h3> {/* Film adı */}
            <button
              className="add-button"
              onClick={() => handleAddMovie(movie)}
            >
              Add to Watchlist
            </button>
          </div>
          <div className="movie-rating"> {/* Rating burada */}
            ⭐ {movie.vote_average.toFixed(2)} {/* Rating gösterimi */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
