import { createContext, PropsWithChildren, useContext } from "react";
import { Movie } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface CartContextValues {
  items: Movie[];
  addToCart: (value: Movie) => void;
  removeFromCart: (id: number) => void;
  isMovieInTheCart: (id: number) => boolean;
}

const initialValues: CartContextValues = {
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isMovieInTheCart: () => false,
};

export const CartContext = createContext<CartContextValues>(initialValues);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }: PropsWithChildren) {
  const { data, setData } = useLocalStorage<Movie[]>("cart", []);

  const addToCart = (movie: Movie) => {
    const exists = data.find((elem) => elem.id === movie.id);
    if (exists) {
      return;
    }

    const newItems = [...data, movie];
    setData(newItems);
  };

  const removeFromCart = (id: number) => {
    const newItems = data.filter((elem) => elem.id !== id);
    setData(newItems);
  };

  const isMovieInTheCart = (id: number) => {
    return data.some((elem) => elem.id === id);
  };

  const value = {
    items: data,
    addToCart,
    removeFromCart,
    isMovieInTheCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
