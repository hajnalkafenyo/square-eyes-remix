import ImdbLogo from "./imdb_logo.png";
import styles from "./styles.module.scss";

interface Props {
  score: number;
}

export const ImdbScore = ({ score }: Props) => {
  return (
    <div>
      <span className={styles.imdbLogo}>
        <img src={ImdbLogo} alt="IMDB Logo" />{" "}
        <strong>{score.toFixed(1)}</strong> / 10
      </span>
    </div>
  );
};
