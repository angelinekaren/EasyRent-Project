import React from "react";
import { Container } from "../../GlobalStyles";
import { Fade } from "@mui/material";
import { authenticationService } from "../../services/authentication.service";
import {
  Section,
  WelcomeRow,
  WelcomeColumn,
  TextWrapper,
  TextTitle,
  Title,
  WelcomeTitle,
  Subtitle,
  BtnWrapper,
  JoinBtn,
  JoinLink,
  LearnBtn,
  LearnLink,
  ImgWrapper,
  Img,
  LinkDirect,
} from "./WelcomeSection.elements";

const WelcomeSection = ({
  start,
  title,
  titleDetail,
  description,
  buttonLabel,
  btnLabel,
  imgStart,
  img,
  alt,
}) => {
  const currentUser = authenticationService.getCurrentUser();

  return (
    <>
      <Section id="home">
        <Container>
          <Fade in timeout={2500}>
            <WelcomeRow start={start}>
              <WelcomeColumn>
                <TextWrapper>
                  <TextTitle>
                    <Title>{title}</Title>
                    <WelcomeTitle>{titleDetail}</WelcomeTitle>
                  </TextTitle>
                  <Subtitle>{description}</Subtitle>
                  <BtnWrapper>
                    <JoinBtn>
                      {(() => {
                        if (currentUser) {
                          if (currentUser.user.role === "admin") {
                            return (
                              <JoinLink to="/users">{buttonLabel}</JoinLink>
                            );
                          }
                          if (currentUser.user.role === "landlord") {
                            return (
                              <JoinLink to="/your-properties">
                                {buttonLabel}
                              </JoinLink>
                            );
                          }
                          if (currentUser.user.role === "tenant") {
                            return (
                              <JoinLink to="/explore">{buttonLabel}</JoinLink>
                            );
                          }
                        } else {
                          return (
                            <JoinLink to="/signup">{buttonLabel}</JoinLink>
                          );
                        }
                      })()}
                    </JoinBtn>
                    <LearnBtn>
                      {(() => {
                        if (currentUser) {
                          if (
                            currentUser.user.role === "landlord" ||
                            currentUser.user.role === "tenant"
                          ) {
                            return (
                              <LinkDirect to="/aboutus">{btnLabel}</LinkDirect>
                            );
                          }
                        } else {
                          return <LearnLink to="aboutus">{btnLabel}</LearnLink>;
                        }
                      })()}
                    </LearnBtn>
                  </BtnWrapper>
                </TextWrapper>
              </WelcomeColumn>
              <WelcomeColumn>
                <ImgWrapper imgStart={imgStart}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </WelcomeColumn>
            </WelcomeRow>
          </Fade>
        </Container>
      </Section>
    </>
  );
};

export default WelcomeSection;
