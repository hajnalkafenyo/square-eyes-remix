import { Movie } from "~/types";
import styles from "./style.module.scss";
import { useNavigate } from "@remix-run/react";
import { Icon } from "~/Icon/Icon";
import TrashIcon from "./rubbish-bin-svgrepo-com.svg";
import { IconButton } from "../IconButton/IconButton";

interface Props {
  movie: Movie;
  onRemove: () => void;
}

export function CartItem({ movie, onRemove }: Props) {
  const navigate = useNavigate();
  return (
    <div className={styles.cartItem}>
      <img
        alt="Movie poster"
        className={styles.moviePoster}
        src={movie.image}
      />
      <div className={styles.movieText}>
        <h2>{movie.title}</h2>
        <div className="">{movie.description}</div>
      </div>
      <div>
        <IconButton src={TrashIcon} alt="Remove" />
      </div>
    </div>
  );
}
