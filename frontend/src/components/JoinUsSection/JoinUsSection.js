import React from "react";

import { Container, Button } from "../../GlobalStyles";
import { Link } from "react-router-dom";

import {
  Section,
  Wrapper,
  Heading,
  BtnWrapper,
} from "./JoinUsSection.elements";

const JoinUsSection = ({ heading, btnLabel }) => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Heading>{heading}</Heading>
          <BtnWrapper>
            <Link to="/signup">
              <Button big>{btnLabel}</Button>
            </Link>
          </BtnWrapper>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default JoinUsSection;
