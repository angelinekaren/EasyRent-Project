import React from "react";

import {
  ExplainSection,
  ExploreSection,
  InstructionSection,
  ContactAboutus,
} from "../../components";

import { authenticationService } from "../../services/authentication.service";

const AboutUs = () => {
  const currentUser = authenticationService.getCurrentUser();
  return (
    <>
      {currentUser && (
        <>
          {currentUser.user.role === "tenant" && (
            <>
              <ExplainSection />
              <ExploreSection />
              <InstructionSection />
              <ContactAboutus />
            </>
          )}
        </>
      )}
    </>
  );
};

export default AboutUs;
