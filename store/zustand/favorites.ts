import {create} from 'zustand';

interface FavoritesState {
    ids: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesState>((set) => ({
    ids: [],
    addFavorite: (id) => set((state) => ({ ids: [...state.ids, id] })),
    removeFavorite: (id) => set((state) => ({
        ids: state.ids.filter(favoriteId => favoriteId !== id)
    }))
}));