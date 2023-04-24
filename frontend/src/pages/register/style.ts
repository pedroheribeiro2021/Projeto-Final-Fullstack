import styled from 'styled-components';

export const MainContainer = styled.main`
  height: 100%;
  background-color: var(--grey8);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  min-width:320px;
  align-items:center;

 
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  height:100%;
  flex-direction: column;
  align-items: flex-start;
  margin:  auto;
  max-width: 412px;
  padding: 44px 48px;
  margin-top:100px;
  gap: 24px;
  background-color: var(--grey10);
  border-radius: 4px;
  min-width:320px;

  @media (min-width: 768px) {
    min-height: 80vh;
    width: 90vw;
  }

  .container_items{
    width:100%;
    display:flex;
    flex-direction:column;
    gap:24px;
    align-items:flex-start;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;

`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  margin-top:8px;
  font-weight: 500;
  font-size: 14px;

`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap:8px;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  color:var(--grey1);

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 16px;
    width: auto;
  }
`;

export const Input = styled.input`
    padding: 0 16px;
    border-radius: 4px;
    height:48px;
    background-color:transparent;
    border: 1.5px solid var(--grey4);
    width: 100%;
    font-size: 16px;

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
    height:48px;
    padding: 12px 28px;
    font-weight: 600;
    font-size: 16px;
    
    &:hover{
      background-color: var(--random4);
      transition:0.3s;
    }
  }
`;

export const BoxTypeAccount = styled.div`
  padding:10px 0;
  display: flex;
  justify-content: center;
  gap: 9px;
  width:100%;

  button{
    padding: 0rem 16px;
    width:49%;
    
    height: 48px;
    font-weight: 600;
    font-size: 16px;

    &:hover{
      background-color: var(--random4);
      transition:0.3s;
    }
  }

  #buttonType2{
    background-color: var(--grey10);
    color: black;
    border: 1px solid var(--grey3);

    &:hover{
      background-color: var(--grey5);
      transition:0.3s;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
 
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