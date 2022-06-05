import styled from "styled-components";
import { Card, CardMedia } from "@mui/material";

export const CardCustom = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-adius: 15px;
  height: 100%;

  position: relative;
`;

export const CardMediaCustom = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

export const Wrapper = styled.div`
  padding: 5px 10px;
`;
