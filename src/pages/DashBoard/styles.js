import styled, { keyframes } from "styled-components";

const Animation = keyframes`
    from{
        opacity:0;
        transform:translateY(50px)
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${Animation} 0.7s;
  nav {
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
  @media (min-width: 800px) {
    nav {
      width: 780px;
    }
  }
`;

export const Cabecalho = styled.div`
  width: 100%;
  height: 118px;
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 800px) {
    div {
      width: 780px;
    }
  }
`;

export const TecnologiasContanier = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 29px 0;
  div {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      height: 32px;
      width: 32px;
      background: var(--grey-3);
      border: none;
      border-radius: 4px;
      color: var(--grey-0);
      font-size: 16px;
      font-weight: bold;
    }
  }
  @media (min-width: 800px) {
    div {
      width: 780px;
    }
  }
`;

export const TecnologiasList = styled.ul`
  margin: 28px 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--grey-3);
  border-radius: 4px;
  padding: 22px 18px;
  list-style: none;
  @media (min-width: 800px) {
    width: 780px;
  }
`;

export const Tecnologias = styled.li`
  width: 100%;
  margin: 8px 0;
  background-color: var(--grey-4);
  border-radius: 4px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background: var(--grey-2);
  }
`;
