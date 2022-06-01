import styled from "styled-components";
import { Link } from "react-router-dom";

export const ChangeSection = styled.div`
  background: #fff;
  padding: 110px 0 0 0;
  color: #000;

  @media screen and (max-width: 768px) {
    padding: 70px 0 0 0;
  }
`;

export const ChangeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row;
`;

export const ChangeColumn = styled.div`
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

export const ChangeFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 150px;
  }
`;

export const ChangeFormCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChangeHeading = styled.h1`
  margin-bottom: 35px;
  margin-right: 1rem;
  font-size: 25px;
  line-height: 1;
  font-weight: 600;
  color: #2bc66a;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ArrowLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
