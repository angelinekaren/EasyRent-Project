import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavFavItem = styled.li`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 30px;
  }
`;

export const NavAccItem = styled.li`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const NavRightMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  padding: 0px 5px;
  list-style-type: none;
  margin: 10px 20px 0 24px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavFavouriteItem = styled.li`
  align-self: center;
`;

export const NavAccountItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: #000;
  height: 100%;
  font-weight: bold;
  padding: 0.5rem 1.3rem;
  font-size: 16px;
  &.active {
    color: #2bc66a;
  }
  &:hover {
    color: #2bc66a;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    display: table;
    text-align: center;
    padding: 2rem;
  }
`;
