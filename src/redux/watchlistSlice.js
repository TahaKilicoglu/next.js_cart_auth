import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [], // Başlangıçta boş bir dizi
};

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies.push(action.payload);
        },
        removeMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload);
        },
    },
});

export const { addMovie, removeMovie } = watchlistSlice.actions;

export default watchlistSlice.reducer;
