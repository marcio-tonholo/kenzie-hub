import { Container, InputContainer } from "./styles";

function Select({ children, name, register, label, error, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>
        {label} {error && <span>- {error}</span>}
      </label>
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
