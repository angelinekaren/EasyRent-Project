import React from "react";
import { TenantAccount } from "../../components";

import { useSelector } from "react-redux";

import { authenticationService } from "../../services/authentication.service";

const AccountPage = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;
  return (
    <>
      {user && (
        <>
          {user.user.role === "tenant" && (
            <>
              <TenantAccount />
            </>
          )}
          {user.user.role === "landlord" && (
            <>
              <TenantAccount />
            </>
          )}
        </>
      )}
    </>
  );
};

export default AccountPage;
