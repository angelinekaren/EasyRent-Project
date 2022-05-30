import React from "react";
import { Container } from "../../GlobalStyles";
import { Fade } from "@mui/material";

import image from "../../images/aboutusIcon.svg";

import {
  Section,
  ExplainRow,
  ExplainColumn,
  TextWrapper,
  TextTitle,
  Title,
  TitleGreen,
  TitleMark,
  Subtitle,
  ImgWrapper,
  Img,
} from "./ExplainSection.elements";

const ExplainSection = () => {
  return (
    <>
      <Section>
        <Container>
          <Fade in timeout={2500}>
            <ExplainRow>
              <ExplainColumn>
                <TextWrapper>
                  <TextTitle>
                    <Title>What is</Title>
                    <TitleGreen>EasyRent</TitleGreen>
                    <TitleMark>?</TitleMark>
                  </TextTitle>
                  <Subtitle>
                    EasyRent is a platform created to provide the ease of
                    experience for both renters and property owners to rent
                    houses. Search for contract or boarding houses that meet
                    your needs within a location. EasyRent has over 1,000 houses
                    in Indonesia and is constantly expanding to provide you with
                    better services and more houses all over the country.{" "}
                  </Subtitle>
                </TextWrapper>
              </ExplainColumn>
              <ExplainColumn>
                <ImgWrapper>
                  <Img src={image} alt="About Us Icon" />
                </ImgWrapper>
              </ExplainColumn>
            </ExplainRow>
          </Fade>
        </Container>
      </Section>
    </>
  );
};

export default ExplainSection;
