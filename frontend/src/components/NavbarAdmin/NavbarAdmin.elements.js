import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarLink = styled(Link)`
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

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: flex-start;
  margin-left: 1.8rem;
  width: 100vw;
  white-space: nowrap;
`;

export const NavMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: #000;
  height: 100%;
  font-weight: bold;
  padding: 0.3rem 0.8rem;
  font-size: 14px;

  &:hover {
    color: #2bc66a;
  }
`;

export const SidebarAccCard = styled.div`
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  width: 240px;
  height: 65px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
`;

export const SidebarCardDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #000;
`;

export const AccName = styled.p`
  font-size: 14px;
`;

export const SidebarIcon = styled.div`
  margin: 15px 10px;
`;

export const SideLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 20px;
`;
