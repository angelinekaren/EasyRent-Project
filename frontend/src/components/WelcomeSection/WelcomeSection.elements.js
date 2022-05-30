import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Section = styled.div`
  background: #fff;
  padding: 130px 0 0 0;
  color: #000;
`;

export const WelcomeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -20px -20px -20px;
  flex-direction: ${({ start }) => (start ? "row-reverse" : "row")};
`;

export const WelcomeColumn = styled.div`
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

export const WelcomeTitle = styled.h1`
  margin-bottom: 22px;
  font-size: 50px;
  line-height: 1;
  font-weight: 600;
  color: #2bc66a;
`;

export const Subtitle = styled.p`
  max-width: 490px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 25px;
  color: #000;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
  }
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
    background: transparent;
    border-style: solid;
    border-width: medium;
    border-color: #2bc66a;
    color: #000;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

export const LearnBtn = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const LearnLink = styled(LinkS)`
  padding: 10px 40px;
  border-style: solid;
  border-width: medium;
  border-color: #ffb443;
  background: transparent;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  outline: none;
  border-radius: 22px;
  width: 100%;
  text-align: center;
  vertical-align: middle;

  &:hover {
    transition: all 0.25 ease-in-out;
    background: #ffb443;
    border: none;
    color: #fff;
  }
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
`;

export const LinkDirect = styled(Link)`
  padding: 10px 40px;
  border-style: solid;
  border-width: medium;
  border-color: #ffb443;
  background: transparent;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  outline: none;
  border-radius: 22px;
  width: 100%;
  text-align: center;
  vertical-align: middle;

  &:hover {
    transition: all 0.25 ease-in-out;
    background: #ffb443;
    border: none;
    color: #fff;
  }
`;
