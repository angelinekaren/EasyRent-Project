import React from "react";
import { Container, Button } from "../../GlobalStyles";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";
import { authenticationService } from "../../services/authentication.service";
import {
  Section,
  Wrapper,
  TextWrapper,
  TextAlign,
  Heading,
  SubHeading,
  TextHeader,
  BtnWrapper,
} from "./IntroSection.elements";

const IntroSection = ({
  heading,
  heading2,
  heading3,
  heading4,
  subheading,
  btnLabel,
}) => {
  const currentUser = authenticationService.getCurrentUser();
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <TextWrapper>
              <TextHeader>
                <TextAlign>
                  <Heading primary>{heading}</Heading>
                  <Heading space>{heading2}</Heading>
                  <Heading primary>{heading3}</Heading>
                </TextAlign>
                <Heading primary>{heading4}</Heading>
              </TextHeader>
              <SubHeading>{subheading}</SubHeading>
            </TextWrapper>
            <BtnWrapper>
              {(() => {
                if (currentUser) {
                  if (currentUser.user.role === "landlord") {
                    return (
                      <Link to="/aboutus">
                        <Button big>Click here</Button>
                      </Link>
                    );
                  }
                  if (currentUser.user.role === "tenant") {
                    return (
                      <Link to="/explore">
                        <Button big>Explore Us</Button>
                      </Link>
                    );
                  }
                } else {
                  return (
                    <LinkS to="aboutus">
                      <Button big>{btnLabel}</Button>
                    </LinkS>
                  );
                }
              })()}
            </BtnWrapper>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default IntroSection;
