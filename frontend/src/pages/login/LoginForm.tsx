import { Header } from "../../components/Header";
import {
  ContainerMain,
  FormContainer,
  InputContainer,
  SubmitButton,
  ForgotPassword,
  SignupButton,
  Title,
  BoxButtonSubmit,
  BoxButtonCadastro,
} from "./style";
import { Footer } from "../../components/Footer";
import { useLogin } from "../../contexts/loginContext";
import { ModalRecoverPassword } from "../../components/ModalRecoverPassword";
import { Navigate } from "react-router-dom";

const Login = () => {
  const {
    handleRegisterNavigate,
    setIsModalOpen,
    onSubmit,
    register,
    handleSubmit,
  } = useLogin();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const token = localStorage.getItem("token");
  return (
    <>
      {!token ? (
        <>
          <Header />
          <ContainerMain>
            <ModalRecoverPassword />
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <Title>Login</Title>
              <InputContainer>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="Digitar email"
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Digitar senha"
                />
                <ForgotPassword onClick={handleModalOpen}>
                  Esqueci minha senha
                </ForgotPassword>
              </InputContainer>
              <BoxButtonSubmit>
                <SubmitButton type="submit">Entrar</SubmitButton>
              </BoxButtonSubmit>
              <BoxButtonCadastro>
                <span>Ainda não possui conta?</span>
                <span>clique abaixo para cadastrar</span>
                <SignupButton onClick={handleRegisterNavigate}>
                  Cadastrar
                </SignupButton>
              </BoxButtonCadastro>
            </FormContainer>
            <Footer />
          </ContainerMain>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};
export default Login;
