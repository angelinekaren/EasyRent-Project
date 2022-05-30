import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0 160px;
  background: #f5f5f5;
`;

export const RenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RenterHeading = styled.h2`
  margin-top: 17px;
  color: #2bc66a;
  margin-bottom: 18px;
  font-size: 48px;
`;

export const RenterSubheading = styled.h5`
  color: #000;
  margin-bottom: 24px;
  font-size: 20px;
`;
