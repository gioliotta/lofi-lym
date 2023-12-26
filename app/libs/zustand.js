import { create } from "zustand";

export const useZustand = create(set => ({
  favorites: [],
  addFavorite: song =>
    set(state => ({ favorites: [...state.favorites, song] })),
  removeFavorite: songId =>
    set(state => ({
      favorites: state.favorites.filter(fav => fav.id !== songId),
    })),
}));
