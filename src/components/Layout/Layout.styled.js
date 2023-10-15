import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-align: center;
  height: 20px;
  width: 100px;
  padding: 5px;
  margin-right: auto;
  color: #3f3f3f;
  text-decoration: none;
  border: 1px solid gray;
  border-radius: 5px;
  &:hover {
    color: navy;
    border-color: navy;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  color: black;
  &.active {
    color: orangered;
  }
`;

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 52px;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  color: #fff;
  background-color: #e7ecf2;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: auto;

  gap: 20px;
`;

export const Main = styled.main`
  padding-left: 25px;
  padding-bottom: 40px;
  flex-grow: 1;
`;

export const Footer = styled.footer`
  padding: 10px;
  height: 70px;
  background-color: #e7ecf2;
`;
