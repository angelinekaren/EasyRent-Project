import styled from "styled-components";

export const Section = styled.div`
  background: #fff;
  padding: 140px 0;
  color: #000;
`;

export const Wrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const TextWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0;
`;

export const TextAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.div`
  max-width: 600px;
`;

export const Heading = styled.h2`
  margin-bottom: 22px;
  line-height: 0.8;
  font-weight: 600;
  text-align: center;
  margin-right: ${({ space }) => (space ? "0" : "0.5rem")};
  color: ${({ primary }) => (primary ? "#000" : "#2bc66a")};
`;

export const SubHeading = styled.p`
  max-width: 490px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 25px;
  color: #000;
`;
