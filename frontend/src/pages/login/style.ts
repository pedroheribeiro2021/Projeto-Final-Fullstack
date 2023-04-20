import styled from "styled-components";

export const ContainerMain = styled.main`
  height: 100vh;
  background-color: var(--grey7);
  display: flex;
  flex-direction: column;
  gap: 4.7rem;
`;

export const FormContainer = styled.form`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  padding: 0px 40px 0px 40px;
  gap: 20px;
  background-color: var(--grey10);
  box-sizing: border-box;

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
    min-height: 80vh;
    width: 90vw;
  }
  
`;

export const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`;

export const BoxButtonSubmit = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: normal;
    gap: 0.5rem;

  label {
    font-weight: bold;
    font-size: 1.2rem;
    color: #333;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 100%;

    &:focus {
      border-color: #6c63ff;
      outline: none;
    }
  }
`;

export const ForgotPassword = styled.span`
  font-size: 0.9rem;
  color: black;
  text-align: right;
  cursor: pointer;

  &:hover{
    color: var(--brand1);
  }
`;

export const SubmitButton = styled.button`
    width: 100%;
    background-color: rgb(108, 99, 255);
    color: rgb(255, 255, 255);
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

  &:hover {
    background-color: #524dc2;
  }
`;

export const BoxButtonCadastro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SignupButton = styled.button`
  width: 100%;
  background-color: var(--grey10);
  color: black;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--grey4);
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--grey6);
  }
`;