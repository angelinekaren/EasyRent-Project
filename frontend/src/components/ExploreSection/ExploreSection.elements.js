import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0 160px;
  background: #f5f5f5;
`;

export const ExploreWrapper = styled.div`
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

export const HeadingLine = styled.hr`
  border: none;
  height: 3px;
  width: 80px;
  color: #2bc66a;
  background-color: #2bc66a;
`;

export const ExploreHeading = styled.h1`
  margin-top: 17px;
  color: #000;
  margin-bottom: 24px;
  font-size: 48px;
`;

export const ExploreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ExploreCardTitle = styled.h2`
  margin-bottom: 5px;
`;

export const ExploreCardSubTitle = styled.p`
  margin-bottom: 24px;
  text-align: center;
`;

export const ExploreCardIcon = styled.div`
  margin: 20px 0;
`;

export const ExploreCard = styled.div`
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  width: 320px;
  height: 320px;
  border-radius: 10px;

  &:nth-child(2) {
    margin: 30px;
  }

  &:hover {
    transform: translate(0, -5px);
    transition: all 0.4s ease-out;
    background: #2bc66a;

    ${ExploreCardTitle} {
      color: white;
    }

    ${ExploreCardSubTitle} {
      color: white;
    }

    ${ExploreCardIcon} {
      color: white;
    }
  }

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const ExploreCardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 320px;
  padding: 24px;
`;

export const ExploreSubHeading = styled.h3`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  max-width: 1100px;
  text-align: center;
  color: #2bc66a;
  font-size: 20px;
`;
