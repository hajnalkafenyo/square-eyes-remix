import { useQuery } from "@tanstack/react-query";
import { convertProductToMovie } from "~/converters";
import { Movie, WordPressProduct } from "~/types";

export const useMovie = (id: number) => useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const response = await fetch(
        `http://square-eyes-api.local/wp-json/wc/store/products/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const wordPressProduct = (await response.json()) as WordPressProduct;
      const movie = convertProductToMovie(wordPressProduct) 

      return movie;
    },
  });