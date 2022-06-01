import React from "react";
import { Container } from "../../GlobalStyles";
import { Fade } from "@mui/material";

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

const ExplainSection = ({ heading1, heading2, heading3, subtitle, image }) => {
  return (
    <>
      <Section>
        <Container>
          <Fade in timeout={2500}>
            <ExplainRow>
              <ExplainColumn>
                <TextWrapper>
                  <TextTitle>
                    <Title>{heading1}</Title>
                    <TitleGreen>{heading2}</TitleGreen>
                    <TitleMark>{heading3}</TitleMark>
                  </TextTitle>
                  <Subtitle>{subtitle}</Subtitle>
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
