import styled from "styled-components";

export const Container = styled.button`
  width: 97%;
  background: ${(props) => `var(--${props.colorSchema})`};
  height: 38px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: var(--grey-0);
`;
