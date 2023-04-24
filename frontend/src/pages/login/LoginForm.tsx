import { Header } from "../../components/Header";
import { ContainerMain, FormContainer, InputContainer, SubmitButton, ForgotPassword, SignupButton, Title, BoxButtonSubmit, BoxButtonCadastro } from "./style";
import { Footer } from "../../components/Footer";
import { useLogin } from "../../contexts/loginContext";

const Login = () => {
    const {handleRegisterNavigate, onSubmit, register,handleSubmit} = useLogin();

    return(
        <>
        
        
            <Header/>
            <ContainerMain>
            
                <FormContainer onSubmit={handleSubmit(onSubmit)} >
                    
                    <Title>Login</Title>
                    <InputContainer>
                        <label htmlFor="username">Usuário:</label>
                        <input type="text" {...register("username")} placeholder="Digitar usuário" />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" {...register("password")}  placeholder="Digitar senha"/>
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
        </>
    );
};
export default Login;