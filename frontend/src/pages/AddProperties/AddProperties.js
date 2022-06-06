import React from "react";
import { useSelector } from "react-redux";
import {
  VerifyLandlordSection,
  AddProperty,
  PropertyList,
} from "../../components";

const AddProperties = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  return (
    <>
      {user && (
        <>
          {user.user.role === "landlord" && (
            <>
              <VerifyLandlordSection />
              {user.user.isVerified === true && <PropertyList />}
            </>
          )}
        </>
      )}
    </>
  );
};

export default AddProperties;
