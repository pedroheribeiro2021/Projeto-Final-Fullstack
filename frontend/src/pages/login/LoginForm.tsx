import { Header } from "../../components/Header";
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormContainer, InputContainer, SubmitButton, ForgotPassword, SignupButton } from "./style";
import { GlobalStyle } from "../../styles/globalStyle";

const Login = () => {
    interface ILoginData {
        username: string,
        password: string,    
    };

    const minHeight = `calc(100vh - 60px)`;
    
    const { register, handleSubmit } = useForm<ILoginData>();
    
    const onSubmit:SubmitHandler<ILoginData> = data => console.log(data);

    return(
        <>
            <GlobalStyle />
            <Header/>

            <FormContainer onSubmit={handleSubmit(onSubmit)} minHeight={minHeight}>
                <InputContainer>
                    <label htmlFor="username">Usuário:</label>
                    <input type="text" {...register("username")} />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" {...register("password")} />
                    <ForgotPassword>Esqueci minha senha</ForgotPassword>
                </InputContainer>
                <SubmitButton type="submit">Entrar</SubmitButton>
                <div>
                    <span>Ainda não possui conta?</span>
                    <SignupButton>Cadastrar</SignupButton>
                </div>
            </FormContainer>
        </>
    );
};
export default Login;