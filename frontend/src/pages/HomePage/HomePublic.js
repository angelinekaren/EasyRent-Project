import React from "react";
import {
  WelcomeSection,
  IntroSection,
  ExploreSection,
  AboutSection,
  JoinUsSection,
  ContactHomeSection,
} from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

const HomePublic = () => {
  return (
    <>
      <WelcomeSection {...homeObjOne} />
      <IntroSection {...homeObjTwo} />
      <ExploreSection />
      <AboutSection />
      <JoinUsSection {...homeObjThree} />
      <ContactHomeSection />
    </>
  );
};

export default HomePublic;
