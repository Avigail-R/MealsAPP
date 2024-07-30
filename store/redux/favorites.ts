import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface FavoritesState {
    ids: string[]; // Assuming IDs are strings
}

interface AddFavoritePayload {
    id: string;
}

const initialState: FavoritesState = {
    ids: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<AddFavoritePayload>) {
            state.ids.push(action.payload.id);
        },
        removeFavorite(state, action: PayloadAction<string>) {
            state.ids = state.ids.splice(state.ids.indexOf(action.payload), 1); 
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
