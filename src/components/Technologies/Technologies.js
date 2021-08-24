import React from "react";
import { DiFirebase, DiReact, DiJavascript, DiGit } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As a Developer, I've worked with different technologies. From Front to
      Back and Forth.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>HTML | CSS | JavaScript (ES6)</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>ExpressJs | NodeJs | MongoDb | Axios</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Libraries & Frameworks</ListTitle>
          <ListParagraph>
            ReactJs | NextJs | Bootstrap | HandlebarsJs | Material-UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Version-Control</ListTitle>
          <ListParagraph>Git | GitHub</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
