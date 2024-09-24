import { Movie } from "~/types";
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import style from "./styles.module.scss";
import { ContentBox } from "../ContentBox/ContentBox";
import { ImdbScore } from "../ImdbScore/ImdbScore";
import { useCartContext } from "~/CartContext";

interface Props {
  movie: Movie;
}

export function MovieDetails({ movie }: Props) {
  const { isMovieInTheCart, addToCart } = useCartContext();

  return (
    <ContentBox className={style.movieDetails}>
      <div>
        <img
          className={style.moviePoster}
          src={movie.image}
          alt={`${movie.title} poster}`}
        />
      </div>
      <div className="movieDescription">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <Badge>{movie.genre}</Badge>
        <ImdbScore score={movie.rating} />
        <p>
          {movie.onSale ? (
            <>
              On sale for: <s>{movie.price} kr</s> {movie.discountedPrice} kr
            </>
          ) : (
            <>Buy for: {movie.price}kr</>
          )}
        </p>
        <div>
          <Button
            text="Add to cart"
            onClick={() => {
              addToCart(movie);
            }}
            disabled={isMovieInTheCart(movie.id)}
          />
          <Button variant="outlined" text="Add to wishList" />
        </div>
      </div>
    </ContentBox>
  );
}
