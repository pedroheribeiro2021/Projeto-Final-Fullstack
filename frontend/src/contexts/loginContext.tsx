import { createContext, ReactNode, useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ILoginData } from '../types/login/loginInterface';
import { sessionUser } from '../services/api';

type FormValues = {
  username: string;
  password: string;
}

interface ILoginContext {
  onSubmit: SubmitHandler<ILoginData>;
  handleRegisterNavigate: () => void;
  register: any;
  handleSubmit: any;
}

interface ILogin {
  children: ReactNode;
}

const LoginContext = createContext<ILoginContext>({} as ILoginContext);

const LoginProvider = ({ children }: ILogin) => {
  const navigate = useNavigate();

  const handleRegisterNavigate = () => {
    navigate('/register');
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<ILoginData> = (data:any) => sessionUser(data);

  return <LoginContext.Provider value={{ onSubmit, handleRegisterNavigate, register, handleSubmit }}>{children}</LoginContext.Provider>;
};

const useLogin = () => {
  return useContext(LoginContext);
};

export { LoginProvider, useLogin };