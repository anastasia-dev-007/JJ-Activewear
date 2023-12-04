import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export function FavoritesProvider(props) {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addItem = (item) => {
    console.log(item);
    setFavoriteItems([...favoriteItems, item]);
  };

  const removeItem = (removedItem) => {
    const index = favoriteItems.findIndex(item => item.id === removedItem.id);
    if (index !== -1) {
      favoriteItems.splice(index, 1);
      setFavoriteItems([...favoriteItems]);
    }
  }  
  

  return (
    <FavoritesContext.Provider value={{
        items: favoriteItems,
        addItem: addItem,
        removeItem: removeItem,
      }}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
