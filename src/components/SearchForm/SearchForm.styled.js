import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding-left: 25px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const StyledInput = styled.input`
  display: inline-block;
  width: 300px;
  font: inherit;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
export const StyledBtn = styled.button`
  display: inline-block;
  width: 36px;
  height: 36px;
  border: 0;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &.hover {
    opacity: 1;
  }
`;

export const StyledSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
// .input::placeholder {
//   font: inherit;
//   font-size: 18px;
// }
