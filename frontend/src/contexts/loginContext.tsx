import { createContext, ReactNode, useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ILoginData } from '../types/login/loginInterface';
import { SessionUser } from '../services/user/userApi';
import { IUser } from '../types/home/homeInterface';

type FormValues = {
  username: string;
  password: string;
}

interface ILoginContext {
  onSubmit: SubmitHandler<ILoginData>;
  handleRegisterNavigate: () => void;
  register: any;
  handleSubmit: any;
  isModalOpen: boolean;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditUserModalOpen: boolean;
  setIsEditUserModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditAddressModalOpen: boolean;
  setIsEditAddressModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ILogin {
  children: ReactNode;
}

const LoginContext = createContext<ILoginContext>({} as ILoginContext);

const LoginProvider = ({ children }: ILogin) => {
  const navigate = useNavigate();
  const [ user, setUser ] = useState<IUser>();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false)
  const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false)


  const handleRegisterNavigate = () => {
    navigate('/register');
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<ILoginData> = (data:any) => SessionUser(data);

  return <LoginContext.Provider value={{ onSubmit, user, setUser, isModalOpen, setIsModalOpen, isEditUserModalOpen, setIsEditUserModalOpen, isEditAddressModalOpen, setIsEditAddressModalOpen, handleRegisterNavigate, register, handleSubmit }}>{children}</LoginContext.Provider>;
};

const useLogin = () => {
  return useContext(LoginContext);
};

export { LoginProvider, useLogin };