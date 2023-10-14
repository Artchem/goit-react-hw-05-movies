import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: orangered;
  }
`;
