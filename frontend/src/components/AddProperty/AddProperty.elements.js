import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  background: #fff;
  padding: 110px 0 110px 0;
  color: #000;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    justify-content: center;

    flex-direction: column;
  }
`;
