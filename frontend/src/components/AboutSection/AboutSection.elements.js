import styled from "styled-components";

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

export const AboutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row;
`;

export const AboutColumn = styled.div`
  margin-bottom: 10px;
  padding-right: 20px;
  padding-left: 50px;
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
  justify-content: flex-start;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  height: 500px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutCard = styled.div`
  background: white;
  border-style: solid;
  border-width: medium;
  border-color: #2bc66a;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  width: 320px;
  height: 200px;
  border-radius: 10px;

  &:nth-child(2) {
    margin-top: 30px;
  }

  &:hover {
    transform: translate(0, -5px);
    transition: all 0.4s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const AboutCardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 200px;
  padding: 24px;
`;

export const AboutCardTitle = styled.h3`
  text-align: center;
  margin-bottom: 5px;
`;

export const AboutCardSubtitle = styled.p`
  margin-bottom: 24px;
  text-align: center;
`;

export const AboutHeading = styled.h1`
  margin-bottom: 5px;
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    display: flex;
  }
`;

export const AboutSubheading = styled.h2`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  max-width: 1100px;
  text-align: center;
  color: #2bc66a;
  font-size: 20px;
`;
