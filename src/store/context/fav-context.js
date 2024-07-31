import {createContext, useState} from "react";

export const FavContext = createContext({
  products: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

function FavouritesContextProvider({children}) {
  const [favProducts, setFavProducts] = useState([]);
  function addFavourite(product) {
    setFavProducts((currentFavProducts) => [...currentFavProducts, product]);
  }
  function removeFavourite(id) {
    setFavProducts((currentFavProducts) =>
      currentFavProducts.filter((product) => product.id !== id)
    );
  }
  const value = {
    products: favProducts,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
}

export default FavouritesContextProvider;