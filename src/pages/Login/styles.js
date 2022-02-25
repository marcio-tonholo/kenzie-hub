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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${Animation} 1s;
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
  padding: 30px 12px;

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
