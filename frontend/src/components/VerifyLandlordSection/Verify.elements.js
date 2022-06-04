import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  background: #fff;
  padding: 110px 0 110px 0;
  color: #000;
`;

export const JoinBtn = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const JoinLink = styled(Link)`
  border-radius: 22px;
  background: #2bc66a;
  padding: 10px 50px;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.25 ease-in-out;
  text-decoration: none;
  font-size: 16px;
  width: 100%;
  text-align: center;
  vertical-align: middle;

  &:hover {
    background: green;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

export const VerifyingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row;
`;

export const VerifyingColumn = styled.div`
  margin-bottom: 10px;
  padding-right: 50px;
  padding-left: 50px;

  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 1129px) {
    justify-content: center;
    display: flex;
    flex-basis: 100%;
    margin-top: 50px;
    max-width: 100%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FileUploadCard = styled.div`
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  width: 500px;
  height: 490px;
  justify-content: center;
  border-radius: 10px;
`;

export const CardTextField = styled.div`
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  width: 500px;
  height: 450px;
  border-radius: 10px;
`;

export const FileCardDetail = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 1;
  font-weight: 600;
  color: #000;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 25px;
  line-height: 1;
  font-weight: 600;
  color: #000;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.p`
  margin-bottom: 24px;
  text-align: center;
  font-size: 20px;
  color: #2bc66a;
  font-weight: bold;
`;

export const SubtitlePhoto = styled.p`
  margin-bottom: 24px;
  text-align: center;
  font-size: 15px;
  color: black;
`;

export const Card = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px dashed #2bc66a;
  background-color: #edf2f7;
  min-width: 380px;
  min-height: 100px;
`;

export const CardDetail = styled.div`
  position: relative;
  margin-bottom: 1.5em;
`;

export const ImgWrapper = styled.div`
  max-width: 650px;
  display: flex;
  justify-content: ${({ imgStart }) => (imgStart ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  height: 500px;

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

