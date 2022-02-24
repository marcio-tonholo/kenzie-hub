import { Container, InputContainer } from "./styles";

function Select({ children, name, register, label, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputContainer tabindex="0">
        <select {...rest} {...register(name)}>
          {children.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </InputContainer>
    </Container>
  );
}

export default Select;
