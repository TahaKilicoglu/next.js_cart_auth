import { configureStore } from '@reduxjs/toolkit';
import watchlistReducer from './watchlistSlice'; // watchlistSlice dosyanızı içe aktarın

const store = configureStore({
    reducer: {
        watchlist: watchlistReducer, // watchlist slice'ını store'a ekleyin
    },
});

export default store;
