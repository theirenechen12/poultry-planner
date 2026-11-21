import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #762b20;
  padding: 16px;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 8px;

  &.active {
    color: #ffe199;
    text-decoration: underline;
  }
`;

export const SubNavLink = styled(Link)`
  display: block;
  padding: 10px 16px;
  color: #333;
  text-decoration: none;

  &:hover {
    background: #eee;
  }
`;

export const Dropdown = styled.div`
  position: relative;

  &:hover > div,
  &:focus-within > div {
    display: block;
  }
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  color: white;
  font: inherit;
  padding: 8px;
  cursor: pointer;
`;

export const SubMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background: white;
  box-shadow: 0 4px 12px #0003;
  z-index: 10;
`;