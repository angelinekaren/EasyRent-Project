import React from "react";
import { Container, Button } from "../../GlobalStyles";
import { authenticationService } from "../../services/authentication.service";
import { Link } from "react-router-dom";
import {
  Section,
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

import { BtnWrapper } from "../IntroSection/IntroSection.elements";

const ContactSection = ({ heading, subheading }) => {
  const currentUser = authenticationService.getCurrentUser();
  return (
    <>
      <Section id="contactus">
        <Container>
          {(() => {
            if (currentUser) {
              if (
                currentUser.user.role === "landlord" ||
                currentUser.user.role === "tenant"
              ) {
                return (
                  <>
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
                  </>
                );
              }
            } else {
              return (
                <>
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
                        <ContactCardTitle>
                          easyrentid@gmail.com
                        </ContactCardTitle>
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
                </>
              );
            }
          })()}
        </Container>
      </Section>
    </>
  );
};

export default ContactSection;
