import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 130px 0 160px;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }
`;

export const SignUpHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpHeading = styled.h1`
  color: #2bc66a;
  font-size: 35px;
`;

export const SignUpSubHeading = styled.p`
  margin-top: 10px;
  color: black;
  margin-bottom: 24px;
  font-size: 20px;
`;

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SignUpTitle = styled.h3`
  margin-bottom: 2px;
`;

export const SignUpIcon = styled.div`
  margin: 20px 0;
`;

export const SignUpCard = styled(Link)`
  text-decoration: none;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  width: 320px;
  height: 320px;
  border-radius: 10px;

  &:nth-child(2) {
    margin: 30px;
  }

  &:hover {
    transform: translate(0, -5px);
    transition: all 0.4s ease-out;
    background: #2bc66a;

    ${SignUpTitle} {
      color: white;
    }
  }

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const SignUpCardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 350px;
  padding: 24px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 200px;
  height: 200px;
`;

export const ArrowLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
