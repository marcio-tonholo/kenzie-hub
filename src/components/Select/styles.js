import styled from "styled-components";

export const Container = styled.div`
  width: 97%;
  label {
    color: var(--grey-0);
    font-size: 10px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: var(--grey-2);
  margin: 17px 0;
  padding: 8px 13px;
  height: 38px;
  border: 1.7px solid var(--grey-2);
  border-radius: 3px;

  select {
    width: 100%;
    color: var(--grey-0);
    background: none;
    border: none;
    background: var(--grey-2);
  }
  button {
    background: none;
    border: none;
  }

  svg {
    color: var(--grey-1);
    font-size: 15px;
  }

  :focus-within {
    border: 1.7px solid var(--grey-0);
  }
`;
