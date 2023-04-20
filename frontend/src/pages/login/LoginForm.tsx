import { Header } from "../../components/Header";
import { ContainerMain, FormContainer, InputContainer, SubmitButton, ForgotPassword, SignupButton, Title, BoxButtonSubmit, BoxButtonCadastro } from "./style";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "../../components/Footer";
import { useLogin } from "../../contexts/loginContext";

const Login = () => {
    const {handleRegisterNavigate, onSubmit, register,handleSubmit} = useLogin();

    return(
        <ContainerMain>
            <ToastContainer/>
            <Header/>

            <FormContainer onSubmit={handleSubmit(onSubmit)} >
                <Title>Login</Title>
                <InputContainer>
                    <label htmlFor="username">Usuário:</label>
                    <input type="text" {...register("username")} />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" {...register("password")} />
                    <ForgotPassword>Esqueci minha senha</ForgotPassword>
                </InputContainer>
                <BoxButtonSubmit>
                    <SubmitButton type="submit">Entrar</SubmitButton>
                </BoxButtonSubmit>
                <BoxButtonCadastro>
                    <span>Ainda não possui conta?</span>
                    <SignupButton onClick={handleRegisterNavigate}>Cadastrar</SignupButton>
                </BoxButtonCadastro>
            </FormContainer>
            <Footer/>
        </ContainerMain>
    );
};
export default Login;