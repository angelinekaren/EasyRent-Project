import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginSection = styled.div`
  background: #fff;
  padding: 130px 0 0 0;
  color: #000;
`;

export const LoginRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row;
`;

export const LoginColumn = styled.div`
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

export const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const LoginFormCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginHeading = styled.h1`
  margin-bottom: 30px;
  margin-right: 1rem;
  font-size: 28px;
  line-height: 1;
  font-weight: 600;
  color: #2bc66a;
`;

export const ForgetPass = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  font-size: 13px;
  margin-top: 5px;
  color: black;
  margin-bottom: 20px;
  &:hover {
    color: #2bc66a;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  font-weight: bold;
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
  color: #2bc66a;
  padding-left: 5px;
  font-weight: bold;
  &:hover {
    color: #208c4b;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 1rem;
`;

export const ArrowLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
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
