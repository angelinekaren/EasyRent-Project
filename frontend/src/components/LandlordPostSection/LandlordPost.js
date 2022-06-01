import React from "react";

import {
  Section,
  LandlordWrapper,
  HeadingWrapper,
  LandlordHeading,
  LandlordSubheading,
} from "./LandlordPost.elements";
const LandlordPost = () => {
  return (
    <Section>
      <LandlordWrapper>
        <HeadingWrapper>
          <LandlordHeading>Your</LandlordHeading>
          <LandlordSubheading>Posts</LandlordSubheading>
        </HeadingWrapper>
      </LandlordWrapper>
    </Section>
  );
};

export default LandlordPost;
