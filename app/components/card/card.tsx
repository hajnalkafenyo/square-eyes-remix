import { Movie } from "~/types";
import styles from "./styles.module.scss";
import { useNavigate } from "@remix-run/react";

interface Props {
  movie: Movie;
}

export function Card({ movie }: Props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/movies/${movie.id}`);
      }}
      className={styles.card}
    >
      <img
        alt="Movie poster"
        className={styles.moviePoster}
        src={movie.image}
      />
      <h2>{movie.title}</h2>
      <div className="">{movie.description}</div>
    </div>
  );
}
