import { useMovies } from "~/api/useMovies";
import { Card } from "~/components/card/card";
import { CardContainer } from "~/components/CardContainer/CardContainer";
import { ContentBox } from "~/components/ContentBox/ContentBox";
import { ErrorMessage } from "~/components/ErrorMessage/ErrorMessage";
import { Loading } from "~/components/Loading/Loading";

export default function Movies() {
  const { data, error, isLoading } = useMovies();

  return (
    <>
      <ContentBox>
        <h1>Square-Eyes Home Cinema</h1>
        <p>
          Here you find all our movies, each one a gateway to endless
          entertainment. When you choose a film from Square Eyes AS, you're not
          just making a purchase, you're gaining unlimited access to watch it
          anytime, as often as you wish. Revel in the freedom of viewing your
          favorite movies on your own terms, without any restrictions. Plus,
          with our customer-friendly refund policy, you can confidently explore
          new titles knowing that refunds are available if less than 40% of the
          movie has been watched. Discover, enjoy, and revisit the vast
          collection of high-quality videos that we proudly offer, all designed
          to bring you closer to the world of movie creators.
        </p>
      </ContentBox>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {data && (
        <div>
          <CardContainer>
            {data.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </CardContainer>
        </div>
      )}
    </>
  );
}
