import styled from "styled-components";

export const Section = styled.div`
  background: #fff;
  padding: 130px 0 0 0;
  color: #000;
`;

export const ExplainRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row;
`;

export const ExplainColumn = styled.div`
  margin-bottom: 150px;
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

export const TextWrapper = styled.div`
  max-width: 550px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const TextTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  margin-right: 1rem;
  font-size: 50px;
  line-height: 1;
  font-weight: 600;
  color: #000;
`;

export const TitleGreen = styled.h1`
  margin-right: 1rem;
  font-size: 50px;
  line-height: 1;
  font-weight: 600;
  color: #2bc66a;
  margin-bottom: 8px;
`;

export const TitleMark = styled.h1`
  font-size: 50px;
  line-height: 1;
  font-weight: 600;
  color: #000;
  margin-bottom: 15px;
`;
export const Subtitle = styled.p`
  max-width: 490px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 25px;
  color: #000;
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
`;
