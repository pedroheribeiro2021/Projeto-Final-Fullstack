import styled from 'styled-components';

export const MainContainer = styled.main`
  background-color: var(--grey7);
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Form = styled.form`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 500px;
  padding: 1.5rem 2rem;
  min-height: 80vh;
  gap: 20px;
  background-color: var(--grey10);

  @media (min-width: 768px) {
    min-height: 80vh;
    width: 90vw;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 16px;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 16px;
    width: auto;
  }
`;

export const Input = styled.input`
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 100%;

    &:focus {
      border-color: #6c63ff;
      outline: none;
    }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  button {
    width: 100%;
    min-width: 49%;
    min-height: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const BoxTypeAccount = styled.div`
  padding: 1rem 0px;
  display: flex;
  justify-content: center;
  gap: 2rem;

  button{
    padding: 0rem 0.5rem;
    min-width: 15%;
    min-height: 2.5rem;

    &:hover{
      background-color: var(--random4);
    }
  }

  #buttonType2{
    background-color: var(--grey10);
    color: black;
    border: 1px solid var(--grey3);

    &:hover{
      background-color: var(--grey5);
    }
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 8px;
`;

export const HeaderModal = styled.header`
  display: flex;
  justify-content: space-between;

  h2 {
    color: var(--sucess1);
  }

  button {
    color: var(--brand0);
    padding: 0.4rem;
    border: 1px solid transparent;
    border-radius: 0.7rem;
    min-width: 7%;
    min-height: 2.5rem;
    margin-bottom: 1rem;

    &:hover {
      color: var(--alert1);
      border: 1px solid var(--grey4);
      border-radius: 0.7rem;
      padding: 0.4rem;
    }
  }
`;

export const ButtonLoginModal = styled.button`
  min-width: 7%;
  padding: 0.7rem 0.5rem;

`;