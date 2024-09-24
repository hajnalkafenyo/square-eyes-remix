import { useParams } from "@remix-run/react";
import { useMovie } from "~/api/useMovie";
import { useCartContext } from "~/CartContext";
import { MovieDetails } from "~/components/MovieDetails/MovieDetails";
import { useCart } from "~/hooks/useCart";

export default function Details() {
  const { id } = useParams();
  const movieId = parseInt(id!);

  const { items } = useCartContext();

  const { data, error, isLoading } = useMovie(movieId);

  if (!data) return null;

  return (
    <>
      <MovieDetails movie={data} />

      <ul>
        {items.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
