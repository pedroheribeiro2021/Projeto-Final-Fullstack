import styled from "styled-components";


export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  padding: 0px 40px;
  align-items: center;
  border-bottom: 2px solid var(--grey6);
  width: 100%;
  min-width: 320px;
  position: fixed;
  background-color: var(--whiteFixed);
  z-index: 6;

  .header_button {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }

  .login {
    padding: 12px 28px;
    color: var(--grey0);
    font-size: 16px;
    border-radius: 4px;
    border: 1.5px solid var(--grey4);
    background-color: transparent;
   
  }
  .login:hover {
    border: 1.5px solid transparent;
    color: var(--brand1);
  }

  .register {
    padding: 12px 28px;
    color: var(--grey0);
    font-size: 16px;
    border-radius: 4px;
    border: 1.5px solid var(--grey4);
    background-color: transparent;

   
  }
  
  .register:hover {
    border: 1.5px solid transparent;
    color: var(--brand1);
  }

  #active {
    padding: 12px 28px;
    font-size: 16px;
    border: 1.5px solid transparent;
    background-color: transparent;
    color: var(--brand1);
  }
  
  @media (max-width: 768px) {
    display: none;
    gap: 0.5rem;
    padding-left: 0.6rem;
    margin-top: 0.7rem;
    .login {
      display: none;
    }
    .register {
      display: none;
    }
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const ContainerMenu = styled.div`
    background-color: var(--whiteFixed);
    height: 10%;
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 1rem; */
    cursor: pointer;
    position: fixed;
    top: 7.5%;

    button {
      width: 100%;
      height: 100%;
      padding: 5px 0;
      background-color: var(--whiteFixed);
      border: 1px solid var(--grey6);
      /* border-bottom: 2px solid var(--grey6); */
    }

    button:hover {
    border: 1px solid transparent;
    color: var(--grey4);
  }
`
