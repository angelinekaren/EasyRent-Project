import React from "react";
import { FaHome, FaStar, FaCreditCard } from "react-icons/fa";
import {
  Section,
  ExploreWrapper,
  HeadingWrapper,
  HeadingLine,
  ExploreHeading,
  ExploreContainer,
  ExploreCard,
  ExploreCardDetail,
  ExploreCardIcon,
  ExploreCardTitle,
  ExploreCardSubTitle,
  ExploreSubHeading,
} from "./ExploreSection.elements";

const ExploreSection = () => {
  return (
    <Section id="explore">
      <ExploreWrapper>
        <HeadingWrapper>
          <HeadingLine />
          <ExploreHeading>Why Us?</ExploreHeading>
        </HeadingWrapper>
        <ExploreContainer>
          <ExploreCard>
            <ExploreCardDetail>
              <ExploreCardIcon>
                <FaHome size="75px" />
              </ExploreCardIcon>
              <ExploreCardTitle>Rent houses in a click</ExploreCardTitle>
              <ExploreCardSubTitle>
                There will be no need to survey houses. Find your ideal rental
                home by just tapping!
              </ExploreCardSubTitle>
            </ExploreCardDetail>
          </ExploreCard>
          <ExploreCard>
            <ExploreCardDetail>
              <ExploreCardIcon>
                <FaCreditCard size="70px" />
              </ExploreCardIcon>
              <ExploreCardTitle>Guaranteed payment</ExploreCardTitle>
              <ExploreCardSubTitle>
                Pay for months upfront without worry! Payments will be
                distributed to contractors on a monthly basis and can be
                returned if you want to relocate.
              </ExploreCardSubTitle>
            </ExploreCardDetail>
          </ExploreCard>
          <ExploreCard>
            <ExploreCardDetail>
              <ExploreCardIcon>
                <FaStar size="75px" />
              </ExploreCardIcon>
              <ExploreCardTitle>Honest features</ExploreCardTitle>
              <ExploreCardSubTitle>
                Our trusty team will survey the houses to check the transparency
                of the features posted by contractors. You can also check user
                reviews!
              </ExploreCardSubTitle>
            </ExploreCardDetail>
          </ExploreCard>
        </ExploreContainer>
        <ExploreSubHeading>
          Look at and compare the amenities of several rental houses, read the
          reviews, get in touch with the owners, pay upfront or monthly, and
          book your rental home today!
        </ExploreSubHeading>
      </ExploreWrapper>
    </Section>
  );
};

export default ExploreSection;
