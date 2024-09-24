import {useState} from "react";
import { Movie } from "~/types";

export function useCart(){
    // infer
    const [items, setItems] = useState<Movie[]>([])

    const addToCart = (movie: Movie) => {
        const exists = items.find((elem) => elem.id === movie.id)
        if (exists) {
            return
        }

        setItems([...items, movie])
    }


    return {
        addToCart,
        items
    }
}