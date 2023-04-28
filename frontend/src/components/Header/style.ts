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

  @media(max-width:768px){
    display: none;
    gap: 0.5rem;
    padding-left: 0.6rem;
    margin-top: 0.7rem;
  }
`;