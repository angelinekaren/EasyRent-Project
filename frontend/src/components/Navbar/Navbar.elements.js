import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 100px;
  z-index: 100;
  @media screen and (max-width: 960px) {
    transition: 0.2s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: start;
  cursor: pointer;
  margin: 10px 20px 0 24px;
  text-decoration: none;
  @media screen and (max-width: 960px) {
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

export const BrandTitle = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 20px;
  padding-left: 0.7rem;
`;

export const MobileIcons = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 24px;
  transform: translate(-100%, 60%);
  font-size: 1.5rem;
  cursor: pointer;
  color: black;
  // display: none;
  // @media screen and (max-width: 960px) {
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   margin-top: 24px;
  //   transform: translate(-100%, 60%);
  //   font-size: 1.5rem;
  //   cursor: pointer;
  //   color: black;
  // }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: center;
  width: 100vw;
  white-space: nowrap;

  // @media screen and (max-width: 960px) {
  //   display: flex;
  //   flex-direction: column;
  //   width: 100%;
  //   height: 90vh;
  //   position: absolute;
  //   top: 100px;
  //   left: ${({ click }) => (click ? 0 : "-100%")};
  //   opacity: 1;
  //   transition: all 0.5s ease;
  //   background: white;
  // }
`;

export const NavItem = styled.li`
  margin-top: 10px;
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NavSignItem = styled.li`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 20px;
  }
`;

export const NavSignInUpMenu = styled.ul`
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

export const NavSignInItem = styled.li`
  padding-right: 50px;
  align-self: center;
`;

export const NavLink = styled(LinkS)`
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

export const NavSignInLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: #000;
  height: 100%;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    color: #2bc66a;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 22px;
  background: #2bc66a;
  padding: 10px 21px;
  height: 1005;
  width: 100%;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.25 ease-in-out;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    background: transparent;
    border-style: solid;
    border-width: medium;
    border-color: #2bc66a;
    color: #000;
  }
  @media screen and (max-width: 960px) {
    padding: 12px 64px;
  }
`;

export const NavItemBtn = styled.li`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const SidebarMenu = styled.div`
  margin-top: 6.23rem;
  display: flex;
  align-items: center;
  list-style: none;
  flex-direction: column;
`;

export const SidebarItem = styled.li`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding: 8px 0px 8px 16px;
  width: 100%;
  transition: 0.2s all ease-out;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: black;
  width: 95%;
  border-radius: 4px;
  height: 100%;
  font-weight: bold;
  font-size: 16px;
  padding: 1.5rem 2rem;
  &.active {
    background: #2bc66a;
  }

  &:hover {
    background: #2bc66a;
  }
`;

export const SideMenu = styled.div`
  width: 100%;
  font-size: 1.2rem;
  bottom: 0;
  position: absolute;
`;

export const SidebarSignLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: black;
  width: 95%;
  border-radius: 4px;
  height: 100%;
  font-weight: bold;
  font-size: 16px;
  padding: 1.5rem 2rem;

  &:hover {
    background: #2bc66a;
  }
`;
