import React, { createContext, useContext, useState } from "react";
import { createUser } from "../services/user/userApi";
import { UserRequest } from "../types/register/registerInterface";
import { schemaRegisterForm } from "../schema/userRegister/schema";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister, useForm } from "react-hook-form";

type UserContextType = {
    user: boolean;
    isSuccessModalOpen: boolean;
    createUserAccount: (data: UserRequest) => Promise<void>;
    register: UseFormRegister<UserRequest>;
    handleSubmit: UseFormHandleSubmit<UserRequest>;
    errors: FieldErrors<UserRequest>;
    setIsSuccessModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type UserProviderProps = {
    children: React.ReactNode;
};

export const RegisterUserContext = createContext<UserContextType>({} as UserContextType);
export function RegisterUserProvider({ children }: UserProviderProps) {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [user, setUser] = useState(false);
  const { register, handleSubmit, formState: { errors }} =useForm<UserRequest>({resolver: yupResolver(schemaRegisterForm)});

  async function createUserAccount(data: UserRequest) {
    try {
      await schemaRegisterForm.validate(data, { abortEarly: false });
      await createUser(data, setUser, setIsSuccessModalOpen);
    } catch (error) {
      const validationErrors: Record<string, string> = {};
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err) => {
          validationErrors[err.path ?? ''] = err.message;
        });
      }
    }
  }

  return (
    <RegisterUserContext.Provider
      value={{
        user,
        isSuccessModalOpen,
        setIsSuccessModalOpen,
        createUserAccount,
        register,
        handleSubmit,
        errors
      }}
    >
      {children}
    </RegisterUserContext.Provider>
  );
}
export const useUser = () => {
    return useContext(RegisterUserContext);
};
