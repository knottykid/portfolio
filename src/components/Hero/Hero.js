import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Dev Portfolio
        </SectionTitle>
        <SectionText>
          My Name is <b style={{ color: "red" }}>John Rosario</b>, I'm a
          full-stack developer with a background in Psychology and a creative
          and systematic mindset.
        </SectionText>
        <Button onClick={() => (window.location = "#about")}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
