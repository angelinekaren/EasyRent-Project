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

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeadingLine = styled.hr`
  border: none;
  height: 3px;
  width: 80px;
  color: #2bc66a;
  background-color: #2bc66a;
`;

export const InstructionHeading = styled.h1`
  margin-top: 17px;
  color: #000;
  margin-bottom: 35px;
  font-size: 48px;
  text-align: center;
`;

export const InstructionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row;
`;

export const InstructionColumn = styled.div`
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

export const InstructionCard = styled.div`
  background: white;
  border-style: solid;
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  width: 320px;
  height: 110px;
  border-radius: 10px;
  margin: 8px 0;

  &:hover {
    transform: translate(0, -5px);
    transition: all 0.4s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const InstructionCardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 130px;
  padding: 24px;
`;

export const InstructionCardSubtitle = styled.p`
  font-size: 15px;
  margin-bottom: 24px;
  text-align: center;
`;
