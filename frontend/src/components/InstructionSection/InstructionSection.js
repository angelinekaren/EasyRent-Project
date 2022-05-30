import React from "react";
import mainImage from "../../images/renters_aboutus.svg";

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

const InstructionSection = () => {
  return (
    <Section>
      <Container>
        <HeadingWrapper>
          <HeadingLine />
          <InstructionHeading>
            How to book your rental room or house?
          </InstructionHeading>
        </HeadingWrapper>
        <InstructionRow>
          <InstructionColumn>
            <ImgWrapper>
              <Img src={mainImage} alt="Renter About Us Image" />
            </ImgWrapper>
          </InstructionColumn>
          <InstructionColumn>
            <CardWrapper>
              <InstructionCard>
                <InstructionCardDetail>
                  <InstructionCardSubtitle>
                    Enter your desired area and search for a room or house that
                    meets your requirements
                  </InstructionCardSubtitle>
                </InstructionCardDetail>
              </InstructionCard>
              <InstructionCard>
                <InstructionCardDetail>
                  <InstructionCardSubtitle>
                    Save your favorite rental places and compare rooms or houses
                    to find the perfect home. Read other users’ reviews and chat
                    the owner for any questions
                  </InstructionCardSubtitle>
                </InstructionCardDetail>
              </InstructionCard>
              <InstructionCard>
                <InstructionCardDetail>
                  <InstructionCardSubtitle>
                    Pay monthly or pay months upfront without worry. If you need
                    to relocate, deposits can be refunded!
                  </InstructionCardSubtitle>
                </InstructionCardDetail>
              </InstructionCard>
              <InstructionCard>
                <InstructionCardDetail>
                  <InstructionCardSubtitle>
                    Your rental place is ready on the date! Enjoy your stay and
                    leave a review for the rental place 30 days after your stay
                  </InstructionCardSubtitle>
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
