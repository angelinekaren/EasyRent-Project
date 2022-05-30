import React from "react";
import logo from "../../images/easyrent_logo.png";

import {
  FooterContainer,
  FooterWrapper,
  FooterContent,
  FooterLogo,
  BrandTitle,
  FooterText,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <FooterLogo>
            <img src={logo} alt="EasyRent Logo" width="38" height="33" />
            <BrandTitle>EasyRent</BrandTitle>
          </FooterLogo>
          <FooterText>&copy; 2022 EasyRent • All Rights Reserved</FooterText>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
