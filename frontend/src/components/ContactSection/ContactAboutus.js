import React from "react";
import { Container, Button } from "../../GlobalStyles";
import { Link } from "react-router-dom";

import {
  SectionCustom,
  HeadingWrapper,
  HeadingLine,
  ContactHeading,
  ContactSubheading,
} from "./ContactSection.elements";

import { BtnWrapper } from "../IntroSection/IntroSection.elements";
const ContactAboutus = () => {
  return (
    <SectionCustom>
      <Container>
        <HeadingWrapper>
          <HeadingLine />
          <ContactHeading>Need help?</ContactHeading>
          <ContactSubheading>
            Still confused? Don’t worry we got you.
          </ContactSubheading>
        </HeadingWrapper>
        <BtnWrapper>
          <Link to="aboutus">
            <Button big>Contact Us</Button>
          </Link>
        </BtnWrapper>
      </Container>
    </SectionCustom>
  );
};

export default ContactAboutus;
