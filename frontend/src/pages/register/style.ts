import { Slide } from 'react-toastify';
import styled from 'styled-components';

export const SectionContainer = styled.section`
    background-color: var(--whiteFixed);
    position: absolute;
    top: 0px;
    width: 90vw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  /* width: 90vw; */
  max-width: 800px;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 32px;
    margin: 8rem 0px 0px 39%;
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
  font-size: 16px;
  padding: 8px;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50% - 8px);
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  
  button {
    min-width: 49%;
    min-height: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const BoxTypeAccount = styled.div`
  padding: 1rem 0px 1rem 0px;

  button{
    margin-left: 0.7rem;
    min-width: 15%;
    min-height: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 8px;
`;