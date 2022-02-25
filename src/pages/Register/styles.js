import styled, { keyframes } from "styled-components";

const Animation = keyframes`
    from{
        opacity:0;
        transform:translatey(-50px)
    }
    to{
        opacity: 1;
        transform: translatey(0px);
    }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${Animation} 1s;
  header {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 35px 0;

    button {
      height: 25px;
      width: 70px;
      background: var(--grey-3);
      border: none;
      border-radius: 4px;
      color: var(--grey-0);
    }
  }
  @media (min-width: 768px) {
    header {
      width: 396px;
    }
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
  margin-bottom: 38px;

  h1 {
    text-align: center;
  }
  p {
    margin: 34px 0 22px 0;
  }
  @media (min-width: 768px) {
    width: 396px;
  }
`;
