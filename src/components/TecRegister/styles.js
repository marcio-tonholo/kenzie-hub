import styled, { keyframes } from "styled-components";

export const Modal = styled.div`
  display: ${(props) => (props.tecRegister ? "flex" : "none")};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
`;
const Animation = keyframes`
    from{
        opacity:0;
        transform:translatey(50px)
    }
    to{
        opacity: 1;
        transform: translatey(0px);
    }
`;
export const ModalContanier = styled.div`
  width: 369px;
  height: 342px;
  animation: ${Animation} 1s;
  header {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 12px;
    width: 100%;
    height: 50px;
    background: var(--grey-2);
    border-radius: 4px 4px 0 0;
    button {
      background: transparent;
      width: auto;
      height: auto;
      font-weight: bold;
      border: none;
      color: var(--grey-0);
    }
  }

  form {
    padding: 12px 22px;
    background: var(--grey-3);
    border-radius: 0 0 4px 4px;
  }
  @media (max-width: 400px) {
    width: 95%;
  }
`;
