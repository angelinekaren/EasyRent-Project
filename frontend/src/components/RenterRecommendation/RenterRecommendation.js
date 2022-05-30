import React from "react";

import {
  Section,
  RenterWrapper,
  HeadingWrapper,
  RenterHeading,
  RenterSubheading,
} from "./RenterRec.elements";

const RenterRecommendation = () => {
  return (
    <Section id="explore">
      <RenterWrapper>
        <HeadingWrapper>
          <RenterHeading>Best-rated</RenterHeading>
          <RenterSubheading>
            Rental Rooms and Houses from Renties
          </RenterSubheading>
        </HeadingWrapper>
      </RenterWrapper>
    </Section>
  );
};

export default RenterRecommendation;
