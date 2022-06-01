import React from "react";
import { Container } from "../../GlobalStyles";

import {
  SectionNew,
  HeadingWrapper,
  HeadingLine,
  ContactHeading,
  ContactSubheading,
  ContactContainer,
  ContactCard,
  ContactCardDetail,
  ContactCardIcon,
  ContactCardTitle,
} from "./ContactSection.elements";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactusSection = () => {
  return (
    <>
      <SectionNew>
        <Container>
          <HeadingWrapper>
            <HeadingLine />
            <ContactHeading>Need help?</ContactHeading>
            <ContactSubheading>
              Still confused? Don’t worry we got you.
            </ContactSubheading>
          </HeadingWrapper>
          <ContactContainer>
            <ContactCard>
              <ContactCardDetail>
                <ContactCardIcon>
                  <FaEnvelope size="75px" />
                </ContactCardIcon>
                <ContactCardTitle>easyrentid@gmail.com</ContactCardTitle>
              </ContactCardDetail>
            </ContactCard>
            <ContactCard>
              <ContactCardDetail>
                <ContactCardIcon>
                  <FaWhatsapp size="75px" />
                </ContactCardIcon>
                <ContactCardTitle>+62819999999999999</ContactCardTitle>
              </ContactCardDetail>
            </ContactCard>
          </ContactContainer>
        </Container>
      </SectionNew>
    </>
  );
};

export default ContactusSection;
