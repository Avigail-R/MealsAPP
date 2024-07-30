import React, { createContext, useState, ReactNode } from 'react';

// Define the types for the context value
interface FavoritesContextType {
    ids: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

// Create the context with default values
const FavoritesContext = createContext<FavoritesContextType>({
    ids: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});

interface FavoritesContextProviderProps {
    children: ReactNode;
}

function FavoritesContextProvider({ children }: FavoritesContextProviderProps) {
    const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

    function addFavorite(id: string) {
        setFavoriteMealIds((current) => [...current, id]);
    }

    function removeFavorite(id: string) {
        setFavoriteMealIds((current) => current.filter(mealId => mealId !== id));
    }

    return (
        <FavoritesContext.Provider value={{ ids: favoriteMealIds, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export { FavoritesContext, FavoritesContextProvider };
