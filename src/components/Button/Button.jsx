import { Container, StyledButton } from './Button.styled';

function Button({ onBtnClick }) {
  return (
    <Container>
      <StyledButton onClick={onBtnClick}>Load More</StyledButton>
    </Container>
  );
}

export default Button;
