import { useState } from "react";
import { Container, InputContainer } from "./styles";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

function Input({ label, register, error, name, ...rest }) {
  const [switchType, setSwitchType] = useState(true);

  return (
    <Container>
      <label htmlFor={name}>
        {label} {error && <span>- {error}</span>}
      </label>
      <InputContainer tabindex="0">
        <input
          {...register(name)}
          {...rest}
          type={name.includes("password") && switchType ? "password" : "text"}
        />
        {name === "password" && (
          <button type="button" onClick={() => setSwitchType(!switchType)}>
            {switchType ? <IoIosEye /> : <IoIosEyeOff />}
          </button>
        )}
        {name === "passwordConfirm" && (
          <button type="button" onClick={() => setSwitchType(!switchType)}>
            {switchType ? <IoIosEye /> : <IoIosEyeOff />}
          </button>
        )}
      </InputContainer>
    </Container>
  );
}

export default Input;
