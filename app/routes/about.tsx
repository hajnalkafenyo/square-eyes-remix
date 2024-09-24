import { Hero } from "~/components/Hero/Hero";
import AboutHero from "../assets/aboutus.jpg";
import { ContentBox } from "~/components/ContentBox/ContentBox";

export default function Index() {
  return (
    <div>
      <Hero src={AboutHero} alt="About us" />
      <ContentBox>
        <h1>About us</h1>
        <p>
          Square Eyes AS is a video streaming website where you can purchase
          high-quality videos directly from the people who make them. You can
          purchase videos right away, which will allow them to watch it online.
          <br />
          We emphasise that you can easily discover great collections or browse
          through different categories to find films.
        </p>
        <p>
          Our vision is to bring the creators of movies closer to the audience,
          thus becoming a more connected community.
        </p>
      </ContentBox>
    </div>
  );
}
