// import styled from 'styled-components';

// const FormWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 20px;

//   @media (min-width: 768px) {
//     width: 50%;
//     margin: 20px auto;
//   }
// `;

// const InputWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   margin-bottom: 20px;

//   label {
//     font-size: 16px;
//     margin-bottom: 5px;
//   }

//   input {
//     border: none;
//     border-radius: 5px;
//     padding: 10px;
//     font-size: 16px;
//     outline: none;
//     background-color: #f2f2f2;
//     width: 100%;

//     &:focus {
//       box-shadow: 0 0 2px 2px #ccc;
//     }
//   }
// `;

// const LinkWrapper = styled.div`
//   margin-top: 10px;
//   font-size: 14px;

//   a {
//     color: blue;
//     text-decoration: none;
//   }
// `;

// const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 20px;

//   button {
//     background-color: blue;
//     color: #fff;
//     border: none;
//     border-radius: 5px;
//     padding: 10px 20px;
//     font-size: 16px;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;

//     &:hover {
//       background-color: #fff;
//       color: blue;
//       border: 2px solid blue;
//     }
//   }
// `;

// const LoginWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   h1 {
//     font-size: 24px;
//     margin-bottom: 20px;
//   }

//   p {
//     font-size: 14px;
//     margin-top: 20px;
//   }

//   button {
//     background-color: green;
//     color: #fff;
//     border: none;
//     border-radius: 5px;
//     padding: 10px 20px;
//     font-size: 16px;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;

//     &:hover {
//       background-color: #fff;
//       color: green;
//       border: 2px solid green;
//     }
//   }

//   @media (min-width: 768px) {
//     width: 50%;
//     margin: 20px auto;
//   }
// `;

import styled from "styled-components";

export const FormContainer = styled.form<{minHeight: string}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 40px;
  gap: 20px;

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
    min-height: 100vh;
  }
  
`;

export const InputContainer = styled.div`
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
  color: #6c63ff;
  text-align: right;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  background-color: #6c63ff;
  color: #fff;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #524dc2;
  }
`;

export const SignupButton = styled.button`
  background-color: transparent;
  color: #6c63ff;
  font-size: 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// export { FormWrapper, InputWrapper, LinkWrapper, ButtonWrapper, LoginWrapper };