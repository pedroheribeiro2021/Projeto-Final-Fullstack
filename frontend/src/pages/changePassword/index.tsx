import { SubmitHandler, useForm } from "react-hook-form"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { BoxButtonSubmit, ContainerMain, FormContainer, InputContainer, SubmitButton, Title } from "../login/style"
import { resetPassword } from "../../services/user/userApi"

interface IUserRecover {
    password: string
}

export const ChangePassowrdPage = () => {

    const { register, handleSubmit } = useForm<IUserRecover>();

    const onSubmit: SubmitHandler<IUserRecover> = (data:any) => {
        resetPassword(data)
    }

    return (
        <>
            <Header/>
            <ContainerMain>
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                    <Title>Recuperar senha:</Title>
                    <InputContainer>
                        <label htmlFor="password">Nova Senha:</label>
                        <input type="password" {...register("password")}  placeholder="Digitar senha"/>
                        {/* <label htmlFor="password">Confirme a nova senha:</label>
                        <input type="password" {...register("password")}  placeholder="Digitar senha"/> */}
                    </InputContainer>
                    <BoxButtonSubmit>
                        <SubmitButton type="submit">Trocar senha</SubmitButton>
                    </BoxButtonSubmit>
                </FormContainer>
                <Footer/>
            </ContainerMain>
        </>
    )
}