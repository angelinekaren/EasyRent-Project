import React from "react";
import PropertyOwner from "../../images/property_owner.svg";
import RentalSearcher from "../../images/rent_searcher.svg";
import ArrowIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { Link } from "react-router-dom";

import {
  Section,
  SignUpWrapper,
  SignUpHeader,
  SignUpHeading,
  SignUpSubHeading,
  SignUpContainer,
  SignUpCard,
  SignUpCardDetail,
  SignUpTitle,
  SignUpIcon,
  Img,
  ArrowLink,
} from "./SignUp.elements";

const SignUp = () => {
  return (
    <Section>
      <SignUpWrapper>
        <ArrowLink to="/">
          <ArrowIcon style={{ color: "#2bc66a" }} />
        </ArrowLink>
        <SignUpHeader>
          <SignUpHeading>Sign Up</SignUpHeading>
          <SignUpSubHeading>as</SignUpSubHeading>
        </SignUpHeader>
        <SignUpContainer>
          <SignUpCard id="property-owner" to="/signup/owner">
            <SignUpCardDetail>
              <SignUpTitle>Property Owner</SignUpTitle>
              <SignUpIcon>
                <Img src={PropertyOwner} alt="Property Owner Image" />
              </SignUpIcon>
            </SignUpCardDetail>
          </SignUpCard>
          <SignUpCard id="rental-searcher" to="/signup/renter">
            <SignUpCardDetail>
              <SignUpTitle>Rental Searcher</SignUpTitle>
              <SignUpIcon>
                <Img src={RentalSearcher} alt="Rental Searchers Image" />
              </SignUpIcon>
            </SignUpCardDetail>
          </SignUpCard>
        </SignUpContainer>
      </SignUpWrapper>
    </Section>
  );
};

export default SignUp;
