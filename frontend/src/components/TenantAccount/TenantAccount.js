import { useState } from "react";
import EditProfile from "../EditProfile";
import EditProfileLandlord from "../EditProfileLandlord";
import image from "../../images/account_image.png";
import { useSelector } from "react-redux";

import {
  Section,
  Container,
  AccountCard,
  AccountHeading,
  AccountRow,
  AccountColumn,
  ImgWrapper,
  Img,
  HeadingWrapper,
  TextWrapper,
  FullnameHeading,
  UsernameHeading,
  UsernameSubheading,
  EmailHeading,
  EmailSubheading,
  GenderHeading,
  GenderSubheading,
  RoleHeading,
  RoleSubheading,
  EditBtn,
  EditLink,
  PassLink,
  BtnWrapper,
} from "./TenantAccount.elements";

const TenantAccount = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  return (
    <>
      <Section>
        <Container>
          <AccountCard>
            <HeadingWrapper>
              <AccountHeading>Your Account</AccountHeading>
            </HeadingWrapper>
            <AccountRow>
              <AccountColumn>
                <ImgWrapper>
                  <Img src={image} alt="Account Profile" />
                </ImgWrapper>
              </AccountColumn>
              <AccountColumn>
                <TextWrapper>
                  <FullnameHeading>{user.user.fullname}</FullnameHeading>
                  <UsernameHeading>Username</UsernameHeading>
                  <UsernameSubheading>{user.user.username}</UsernameSubheading>
                  <EmailHeading>Email</EmailHeading>
                  <EmailSubheading>{user.user.email}</EmailSubheading>
                  {user.user.role === "tenant" && (
                    <>
                      <GenderHeading>Gender</GenderHeading>
                      <GenderSubheading>{user.user.gender}</GenderSubheading>
                    </>
                  )}
                  {user.user.role === "landlord" && (
                    <>
                      <GenderHeading>Mobile Phone</GenderHeading>
                      <GenderSubheading>
                        {user.user.mobile_phone}
                      </GenderSubheading>
                    </>
                  )}
                  <RoleHeading>Role</RoleHeading>
                  <RoleSubheading>{user.user.role}</RoleSubheading>
                  <BtnWrapper>
                    <EditLink onClick={() => setOpenPopup(true)}>
                      Edit Profile
                    </EditLink>
                    <PassLink to="/account/changePassword">
                      Change Password
                    </PassLink>
                  </BtnWrapper>
                </TextWrapper>
              </AccountColumn>
            </AccountRow>
          </AccountCard>
        </Container>
      </Section>
      {user.user.role === "tenant" && (
        <EditProfile
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        ></EditProfile>
      )}
      {user.user.role === "landlord" && (
        <EditProfileLandlord
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        ></EditProfileLandlord>
      )}
    </>
  );
};

export default TenantAccount;
