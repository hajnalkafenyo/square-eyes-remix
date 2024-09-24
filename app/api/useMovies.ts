import { useQuery } from "@tanstack/react-query";
import { convertProductToMovie } from "~/converters";
import { Movie, WordPressProduct } from "~/types";

export const useMovies = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch(
        "http://square-eyes-api.local/wp-json/wc/store/products"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const wordPressProducts = (await response.json()) as WordPressProduct[];
      const movies = wordPressProducts.map((wordPressProduct) => {
        return convertProductToMovie(wordPressProduct);
      });

      return movies;
    },
  });
