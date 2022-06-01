import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  background: #fff;
  padding: 110px 0 110px 0;
  color: #000;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  z-index: 1;
  margin-right: auto;
  margin-left: auto;
  padding-right: 130px;
  padding-left: 130px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const AccountCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);

  width: 100% @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  padding-top: 30px;
  padding-left: 20px;
  justify-content: flex-start;
`;

export const AccountRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row;
`;

export const AccountColumn = styled.div`
  margin-bottom: 10px;
  padding-right: 50px;
  padding-left: 50px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 30px;
    display: flex;
    flex-basis: 100%;
    max-width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 650px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  height: 300px;
`;

export const TextWrapper = styled.div`
  max-width: 550px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const AccountHeading = styled.h1`
  margin-bottom: 5px;
  margin-left: 24px;
  display: flex;
  color: #2bc66a;
  margin-top: 10px;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 40px;
  }
`;

export const FullnameHeading = styled.h4`
  margin-bottom: 30px;
  font-size: 40px;
  line-height: 1;
  font-weight: 600;
  color: black;
`;

export const UsernameHeading = styled.h4`
  font-size: 22px;
  color: #2bc66a;
  margin-bottom: 5px;
`;

export const UsernameSubheading = styled.p`
  font-size: 15px;
  color: black;
  margin-bottom: 15px;
`;

export const EmailHeading = styled.h4`
  font-size: 22px;
  color: #2bc66a;
  margin-bottom: 5px;
`;

export const EmailSubheading = styled.p`
  font-size: 15px;
  color: black;
  margin-bottom: 15px;
`;

export const GenderHeading = styled.h4`
  font-size: 22px;
  color: #2bc66a;
  margin-bottom: 5px;
`;

export const GenderSubheading = styled.p`
  font-size: 15px;
  color: black;
  margin-bottom: 15px;
`;

export const RoleHeading = styled.h4`
  font-size: 22px;
  color: #2bc66a;
  margin-bottom: 5px;
`;

export const RoleSubheading = styled.p`
  font-size: 15px;
  color: black;
  margin-bottom: 30px;
`;

export const EditBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const EditLink = styled.p`
  border-radius: 22px;
  background: #2bc66a;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.25 ease-in-out;
  text-decoration: none;
  font-size: 16px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  margin-right: 2rem;

  &:hover {
    background: green;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

export const PassLink = styled(Link)`
  border-radius: 22px;
  background: #ffb443;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.25 ease-in-out;
  text-decoration: none;
  font-size: 16px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  margin-right: 2rem;

  &:hover {
    background: #db880b;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;
