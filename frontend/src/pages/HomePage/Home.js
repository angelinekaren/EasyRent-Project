import React from "react";
import {
  WelcomeSection,
  IntroSection,
  ExploreSection,
  AboutSection,
  JoinUsSection,
  ContactSection,
  RenterRecommendation,
} from "../../components";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjTenant,
  homeObjTenantIntro,
} from "./Data";
import { authenticationService } from "../../services/authentication.service";

const Home = () => {
  const currentUser = authenticationService.getCurrentUser();
  return (
    <>
      {currentUser && (
        <>
          {currentUser.user.role === "tenant" && (
            <>
              <WelcomeSection {...homeObjTenant} />
              <IntroSection {...homeObjTenantIntro} />
              <RenterRecommendation />
              <ContactSection />
            </>
          )}
        </>
      )}
      {!currentUser && (
        <>
          <WelcomeSection {...homeObjOne} />
          <IntroSection {...homeObjTwo} />
          <ExploreSection />
          <AboutSection />
          <JoinUsSection {...homeObjThree} />
          <ContactSection />
        </>
      )}
    </>
  );
};

export default Home;
