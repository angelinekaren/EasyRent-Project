import React from "react";
import mainImage from "../../images/aboutIcon.svg";
import {
  Section,
  Container,
  AboutHeading,
  AboutRow,
  AboutColumn,
  ImgWrapper,
  Img,
  CardWrapper,
  AboutCard,
  AboutCardDetail,
  AboutCardTitle,
  AboutCardSubtitle,
  AboutSubheading,
} from "./AboutSection.elements";

const AboutSection = () => {
  return (
    <Section id="aboutus">
      <Container>
        <AboutHeading>What is EasyRent?</AboutHeading>
        <AboutRow>
          <AboutColumn>
            <ImgWrapper>
              <Img src={mainImage} alt="About Page Image" />
            </ImgWrapper>
          </AboutColumn>
          <AboutColumn>
            <CardWrapper>
              <AboutCard>
                <AboutCardDetail>
                  <AboutCardTitle>Log in as Property Owner</AboutCardTitle>
                  <AboutCardSubtitle>
                    Sign your account in as a property owner and get customers
                    to book your rental houses
                  </AboutCardSubtitle>
                </AboutCardDetail>
              </AboutCard>
              <AboutCard>
                <AboutCardDetail>
                  <AboutCardTitle>Log in as Rental Searcher</AboutCardTitle>
                  <AboutCardSubtitle>
                    Sign your account in as a rental searcher and get yourself
                    our full features to help you book your perfect rental
                    houses
                  </AboutCardSubtitle>
                </AboutCardDetail>
              </AboutCard>
            </CardWrapper>
          </AboutColumn>
        </AboutRow>
        <AboutSubheading>
          EasyRent is a platform created to provide the ease of experience for
          both renters and property owners to rent houses. Search for contract
          or boarding houses that meet your needs within a location. EasyRent
          has over 1,000 houses in Indonesia and is constantly expanding to
          provide you with better services and more houses all over the country.{" "}
        </AboutSubheading>
      </Container>
    </Section>
  );
};

export default AboutSection;
