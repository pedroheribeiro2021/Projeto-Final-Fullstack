import styled from "styled-components";

export const ContainerMain = styled.main`
  height: 100vh;
  background-color: var(--grey8);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  min-width:320px;

`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-height:542px;
  max-width: 412px;
  margin:auto;
  padding: 44px 48px;
  gap: 24px;
  align-items:flex-start;
  background-color: var(--grey10);
  border-radius: 4px;
  min-width:320px;

  label {
    font-size: 18px;
    font-weight: 500;
  }

  input {
    padding: 10px;
    border-radius: 4px;
    border: 1.5px solid var(--grey4);
    width: 100%;
    font-size: 16px;
  }

  .forgot-password {
    font-size: 14px;
    color: var(--brand1);
    cursor: pointer;
     
  }

  .submit-button {
    padding: 12px 28px;
    color: var(--whiteFixed);
    font-size: 16px;
    border-radius: 4px;
    background-color: var(--brand1);
    border: none;
    cursor: pointer;
  }

  .register-button {
    color: var(--brand1);
    font-size: 14px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top:100px;
  }

  @media (max-width:400px){
    margin-top:200px;
  }
  
`;

export const Title = styled.h1`
    font-weight: 500;
    font-size: 24px;
`;

export const BoxButtonSubmit = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: normal;
    gap:8px;
   
  label {
    font-weight: 500;
    font-size: 14px;
    color: var(--grey1);
  }

  input {
    padding: 0px 16px;
    font-size: 1rem;
    border:1.5px solid var(--grey7);
    background-color:transparent;
    height:48px;
    border-radius: 4px;
    width: 100%;

    &:focus {
      border-color: #6c63ff;
      outline: none;
    }
  }
`;

export const ForgotPassword = styled.span`
  color: var(--grey2);
  text-align: right;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;

  &:hover{
    color: var(--brand1);
  }
`;

export const SubmitButton = styled.button`
    width: 100%;
    background-color: var(--brand1);
    color: var(--whiteFixed);
    font-weight: 600;
    font-size: 16px;
    height: 48px;
    padding: 12px 28px;
    border-radius:4px;
    border:1.5px solid var(--brand1);
    cursor: pointer;

  &:hover {
    background-color: #524dc2;
    transition:0.3s;
  }
`;

export const BoxButtonCadastro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  span{
    font-weight: 400;
    font-size: 14px;
    color: var(--grey2);
  }
`;

export const SignupButton = styled.button`
  width: 100%;
  background-color: transparent;
  color: var(--grey0);
  font-weight: 600;
  font-size: 16px;
  height: 48px;
  padding: 12px 28px;
  border: 1.5px solid var(--grey4);
  border-radius:4px;
  cursor: pointer;

  &:hover {
    background-color: var(--grey6);
    transition:0.3s;
  }
`;