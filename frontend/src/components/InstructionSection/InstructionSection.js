import React from "react";

import {
  Section,
  Container,
  HeadingWrapper,
  HeadingLine,
  InstructionHeading,
  InstructionRow,
  InstructionColumn,
  ImgWrapper,
  Img,
  CardWrapper,
  InstructionCard,
  InstructionCardDetail,
  InstructionCardSubtitle,
} from "./InstructionSection.elements";

const InstructionSection = ({
  heading,
  image,
  alt,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
}) => {
  return (
    <Section>
      <Container>
        <HeadingWrapper>
          <HeadingLine />
          <InstructionHeading>{heading}</InstructionHeading>
        </HeadingWrapper>
        <InstructionRow>
          <InstructionColumn>
            <ImgWrapper>
              <Img src={image} alt={alt} />
            </ImgWrapper>
          </InstructionColumn>
          <InstructionColumn>
            <CardWrapper>
              <InstructionCard>
                <InstructionCardDetail>
                  <InstructionCardSubtitle>{subtitle1}</InstructionCardSubtitle>
                </InstructionCardDetail>
              </InstructionCard>
              <InstructionCard>
                <InstructionCardDetail>
                  <InstructionCardSubtitle>{subtitle2}</InstructionCardSubtitle>
                </InstructionCardDetail>
              </InstructionCard>
              <InstructionCard>
                <InstructionCardDetail>
                  <InstructionCardSubtitle>{subtitle3}</InstructionCardSubtitle>
                </InstructionCardDetail>
              </InstructionCard>
              <InstructionCard>
                <InstructionCardDetail>
                  <InstructionCardSubtitle>{subtitle4}</InstructionCardSubtitle>
                </InstructionCardDetail>
              </InstructionCard>
            </CardWrapper>
          </InstructionColumn>
        </InstructionRow>
      </Container>
    </Section>
  );
};

export default InstructionSection;
