import styled from "styled-components";
import { Link } from "react-router-dom";
import { ToggleButton } from "@mui/material";

export const OwnersSection = styled.div`
  background: #fff;
  padding: 110px 0 0 0;
  color: #000;
`;

export const OwnersRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row;
`;

export const OwnersColumn = styled.div`
  margin-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    display: flex;
    flex-basis: 100%;
    max-width: 100%;
  }
`;

export const ArrowLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  max-width: 650px;
  display: flex;
  justify-content: flex-end;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  height: 500px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const OwnersFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OwnersFormCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OwnersHeading = styled.h1`
  margin-bottom: 5px;
  margin-right: 1rem;
  font-size: 28px;
  line-height: 1;
  font-weight: 600;
  color: #2bc66a;
`;

export const OwnersSubHeading = styled.p`
  margin-bottom: 30px;
  margin-right: 1rem;
  margin-top: 3px;
  font-size: 13px;
  line-height: 1;
  color: black;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  font-weight: bold;
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: #2bc66a;
  padding-left: 5px;
  font-weight: bold;

  &:hover {
    color: #208c4b;
  }
`;

export const CustomToggle = styled(ToggleButton)({
  "&.MuiToggleButton-root": {
    padding: "2px 30px",
    color: "#2bc66a",
  },
  "&.MuiToggleButton-root.Mui-selected": {
    color: "white",
    backgroundColor: "#2bc66a",
  },
});

export const RoleInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const RoleHeading = styled.h4`
  font-weight: bold;
  color: #2bc66a;
  margin-right: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorSubheading = styled.p`
  color: red;
  font-size: 15px;
  margin-bottom: 20px;
`;

export const MessageSubheading = styled.p`
  color: #2bc66a;
  font-size: 15px;
  margin-bottom: 20px;
`;
