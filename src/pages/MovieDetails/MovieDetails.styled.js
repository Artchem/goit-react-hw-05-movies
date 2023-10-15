import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 25px;
  padding-right: 70px;
`;

export const LinkButton = styled(Link)`
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
`;

export const StyledImage = styled.img`
  width: 300px;
  height: 100%;
  border-radius: 10px;
`;

export const FilmInfo = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const Title = styled.h2`
  font-size: 24px;
  /* padding-left: 30px; */
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const StyledInfo = styled.div``;
