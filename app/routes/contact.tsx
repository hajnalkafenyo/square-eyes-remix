import { ContentBox } from "~/components/ContentBox/ContentBox";
import ContactHero from "../assets/map.png";
import { Hero } from "~/components/Hero/Hero";
import { Button } from "~/components/Button/Button";
import React from "react";
import { InputField } from "~/components/InputField/InputField";
import { CheckBox } from "~/components/CheckBox/CheckBox";

export default function Index() {
  return (
    <React.Fragment>
      <ContentBox>
        <h1>Contact</h1>

        <h2>Address</h2>

        <p>
          Postal address:
          <br />
          Postbox 1123
          <br /> 1001 Oslo
          <br />
          Norway/Norge
          <br />
        </p>
        <p>
          Location:
          <br />
          Thomas Heftyes gate 16A
          <br /> 1433 Oslo
          <br />
          Norway/Norge
          <br />
        </p>

        <Hero src={ContactHero} alt="Contact us" />

        <h2>Phone</h2>
        <p>
          Customer service: <a href="tel:+4712345678">+47 123 45 678</a> (M-F:
          12:00-16:00)
        </p>

        <p>
          Press contact: <a href="tel:+4798765432">+47 987 65 432</a> (M-F:
          12:00-14:00)
        </p>

        <h2>Email</h2>
        <p>
          Customer service:{" "}
          <a href="mailto:info@square-eyes.com">info@square-eyes.com</a>
        </p>
      </ContentBox>
      <ContentBox>
        <h2>Subscribe</h2>
        <p>I want to subscribe to the newsletter</p>
        <InputField label="Please enter your e-mail" type="email" />
        <CheckBox label="I accept the privacy policy" />
        <Button text="subscribe" />
      </ContentBox>
    </React.Fragment>
  );
}
