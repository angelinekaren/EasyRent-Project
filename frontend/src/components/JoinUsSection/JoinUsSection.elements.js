import styled from "styled-components";

export const Section = styled.div`
  background: #f5f5f5;
  padding: 90px 0 20px 0;
  color: #000;
`;

export const Wrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0;
`;

export const Heading = styled.h2`
  margin-bottom: 22px;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  color: #2bc66a;
`;
