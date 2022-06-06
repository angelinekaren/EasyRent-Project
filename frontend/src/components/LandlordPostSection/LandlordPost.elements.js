import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0 160px;
  background: #f5f5f5;
`;

export const LandlordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 90px 0 90px;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const LandlordHeading = styled.h2`
  color: #2bc66a;
  font-size: 48px;
  margin-right: 0.8rem;
`;

export const LandlordSubheading = styled.h5`
  color: #000;

  font-size: 48px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;
