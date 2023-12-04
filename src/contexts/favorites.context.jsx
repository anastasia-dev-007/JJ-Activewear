import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  toggleFavoriteItem: () => {},
});

export function FavoritesProvider(props) {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addItem = (item) => {
    setFavoriteItems([...favoriteItems, item]);
  };

  const removeItem = (removedItem) => {
    const index = favoriteItems.findIndex(item => item.id === removedItem.id);
    if (index !== -1) {
      favoriteItems.splice(index, 1);
      setFavoriteItems([...favoriteItems]);
    }
  } ;

  const toggleFavoriteItem = (item) => {
    const isFavorite = favoriteItems.some(favorite => favorite.id === item.id);

    if (isFavorite) {
      // If the item is already in favorites, remove it
      const updatedItems = favoriteItems.filter(favorite => favorite.id !== item.id);
      setFavoriteItems(updatedItems);
    } else {
      // If the item is not in favorites, add it
      setFavoriteItems([...favoriteItems, item]);
    }
  };
  
console.log(favoriteItems);
  return (
    <FavoritesContext.Provider value={{
        items: favoriteItems,
        addItem: addItem,
        removeItem: removeItem,
        toggleFavoriteItem: toggleFavoriteItem,
      }}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
