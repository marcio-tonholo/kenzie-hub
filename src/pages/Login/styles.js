import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin: 35px 0;
  }
`;

export const InputContanier = styled.form`
  width: 90%;
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  padding: 42px 12px;

  h1 {
    text-align: center;
  }
  p {
    margin: 34px 0 22px 0;
  }
  @media (min-width: 768px) {
    width: 396px;
    height: 502px;
  }
`;
