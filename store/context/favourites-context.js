import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavourite: (id = {}),
  removeFavourite: (id = {}),
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteealIds, setFavoritesMealIds] = useState([]);
  function addFavourites(id) {
    setFavoritesMealIds((curentFavId) => [...curentFavId, id]);
  }
  function removeFavourites(id) {
    setFavoritesMealIds((currentFavId) =>
      currentFavId.filter((mealId) => mealId !== id)
    );
  }
  const value = {
    ids:favoriteealIds,
    addFavourite:addFavourites,
    removeFavourite:removeFavourites
  }
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
