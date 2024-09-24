import { useMovies } from "~/api/useMovies";
import { Card } from "~/components/card/card";
import { ErrorMessage } from "~/components/ErrorMessage/ErrorMessage";
import { Loading } from "~/components/Loading/Loading";
import { Hero } from "~/components/Hero/Hero";
import IndexHero from "../assets/home-banner.png";
import { CardContainer } from "~/components/CardContainer/CardContainer";
import { Button } from "~/components/Button/Button";
import { useNavigate } from "@remix-run/react";
import { useLocalStorage } from "~/hooks/useLocalStorage";

export default function Index() {
  const { data, error, isLoading } = useMovies();
  const navigate = useNavigate();

  const { data: counter, setData } = useLocalStorage("counter", 0);

  return (
    <div>
      <Hero src={IndexHero} alt="A young couple cuddling in front of a movie" />
      <h2 className="">Cica</h2>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {data && (
        <div>
          <CardContainer>
            {data.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </CardContainer>
          <Button
            text="Show all movies..."
            onClick={() => {
              navigate("/movies");
            }}
          />
        </div>
      )}
      <pre>Current number: {counter}</pre>
      <Button
        onClick={() => {
          setData(counter + 1);
        }}
        text="+1"
      />
    </div>
  );
}
