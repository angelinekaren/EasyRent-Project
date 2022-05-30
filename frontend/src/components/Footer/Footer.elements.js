import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #101522;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  align-items: center;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  padding: 20px;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 20px 0 24px;
`;

export const BrandTitle = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding-left: 0.7rem;
`;

export const FooterText = styled.h5`
  font-size: 10px;
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: flex-end;
  margin: 20px 20px 0 24px;
  color: white;
`;
