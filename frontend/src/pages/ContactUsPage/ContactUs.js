import React from "react";

import { ExplainSection, ContactusSection } from "../../components";

import { explainObj } from "./Data";

import { authenticationService } from "../../services/authentication.service";

const ContactUs = () => {
  const currentUser = authenticationService.getCurrentUser();
  return (
    <>
      {currentUser && (
        <>
          {currentUser.user.role === "tenant" && (
            <>
              <ExplainSection {...explainObj} />
              <ContactusSection />
            </>
          )}
          {currentUser.user.role === "landlord" && (
            <>
              <ExplainSection {...explainObj} />
              <ContactusSection />
            </>
          )}
        </>
      )}
    </>
  );
};

export default ContactUs;
