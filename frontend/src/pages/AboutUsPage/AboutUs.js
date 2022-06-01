import React from "react";

import {
  ExplainSection,
  ExploreSection,
  InstructionSection,
  ContactAboutus,
} from "../../components";

import { explainObjOne, instructionRenter, instructionLandlord } from "./Data";

import { authenticationService } from "../../services/authentication.service";

const AboutUs = () => {
  const currentUser = authenticationService.getCurrentUser();
  return (
    <>
      {currentUser && (
        <>
          {currentUser.user.role === "tenant" && (
            <>
              <ExplainSection {...explainObjOne} />
              <ExploreSection />
              <InstructionSection {...instructionRenter} />
              <ContactAboutus />
            </>
          )}
          {currentUser.user.role === "landlord" && (
            <>
              <ExplainSection {...explainObjOne} />
              <ExploreSection />
              <InstructionSection {...instructionLandlord} />
              <ContactAboutus />
            </>
          )}
        </>
      )}
    </>
  );
};

export default AboutUs;
