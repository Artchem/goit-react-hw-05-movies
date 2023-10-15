import { styled } from 'styled-components';

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 25px;
  gap: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  /* padding: 0; */
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  height: auto;
  width: 240px;
  background-color: navy;
  text-align: center;
  border-radius: 10px;
  transform: scale(1);
  transition: transform 250ms linear;
  &:hover {
    transform: scale(1.04);
  }
`;
export const StyledImg = styled.img`
  display: block;
  height: 360px;
  width: 100%;
  border-radius: 10px;
`;

export const StyledText = styled.p`
  margin: 0;
  padding: 10px;
  color: yellow;
  font-size: 18px;
`;
