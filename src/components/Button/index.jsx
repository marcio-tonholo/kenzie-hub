import { Container } from "./styles";

function Button({ children, colorSchema, ...rest }) {
  return (
    <Container colorSchema={colorSchema} {...rest}>
      {children}
    </Container>
  );
}

export default Button;
