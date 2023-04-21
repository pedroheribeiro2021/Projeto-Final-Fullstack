// import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {Form, ErrorMessage, Input, InputContainer, Label, SectionTitle, Title, SectionContainer, ContainerButton, BoxTypeAccount} from "./style";
import { Header } from "../../components/Header";
import {} from "../../styles/globalStyle";
import { createUser } from "../../services/user/userApi";
import { UserRequest } from "../../types/register/registerInterface";
import { schemaRegisterForm } from "../../schema/userRegister/schema";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserRequest>({resolver: yupResolver(schemaRegisterForm)});

    const onSubmit: SubmitHandler<UserRequest> = async (data) => {
        try {
            await schemaRegisterForm.validate(data, {abortEarly: false});
            createUser(data);
        } catch (error) {
            const validationErrors: Record<string, string> = {};
            if (error instanceof yup.ValidationError) {
                error.inner.forEach((err) => {
                    validationErrors[err.path ?? ''] = err.message;
                });
            }
        }

    };

  return (
        <SectionContainer>
            <Header/>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>Cadastro</Title>

                <SectionTitle>Informações pessoais</SectionTitle>

                <InputContainer>
                    <Label htmlFor="name">Nome:</Label>
                    <Input className="input-label " {...register("name", { required: true })} />
                    {errors.name && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="email">Email:</Label>
                    <Input {...register("email", { required: true })} />
                    {errors.email && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="cpf">CPF:</Label>
                    <Input {...register("cpf", { required: true })} />
                    {errors.cpf && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="phone">Celular:</Label>
                    <Input {...register("cellPhone", { required: true })} />
                    {errors.cellPhone && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="birthdate">Data de nascimento:</Label>
                    <Input type="date" {...register("birthday", { required: true })} />
                    {errors.birthday && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="description">Descrição:</Label>
                    <Input {...register("description")} />
                </InputContainer>

                <SectionTitle>Informações de endereço</SectionTitle>

                <InputContainer>
                    <Label htmlFor="cep">CEP:</Label>
                    <Input {...register("address.cep", { required: true })} />
                    {errors.address?.cep && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="state">Estado:</Label>
                    <Input {...register("address.state", { required: true })} />
                    {errors.address?.state && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="city">Cidade:</Label>
                    <Input {...register("address.city", { required: true })} />
                    {errors.address?.city && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="street">Rua:</Label>
                    <Input {...register("address.street", { required: true })} />
                    {errors.address?.street && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="number">Número:</Label>
                    <Input {...register("address.number", { required: true })}/>
                    {errors.address?.number && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="complement">Complemento:</Label>
                    <Input {...register("address.complement", { required: false })}/>
                    {errors.address?.complement && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>  

                <InputContainer>
                    <Label htmlFor="accountType">Tipo de conta</Label>
                    <BoxTypeAccount>
                        <button type="button" value='false' className="brand1-btn" {...register("is_advertiser", {required: true})}>Comprador</button>
                        <button value='true' className="brand1-btn" {...register("is_advertiser", {required: true})}>Anunciante</button>
                    </BoxTypeAccount>
                    {errors.is_advertiser && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer>  

                <InputContainer>
                    <Label htmlFor="password">Senha:</Label>
                    <Input {...register("password", { required: true })}/>
                    {errors.password && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer> 

                <InputContainer>
                    <Label htmlFor="confirmPassword">Confirmar senha:</Label>
                    <Input {...register("confirmPassword", { required: true })}/>
                    {errors.confirmPassword && <ErrorMessage>Campo obrigatório</ErrorMessage>}
                </InputContainer> 
                
                <ContainerButton>
                    <button className="brand1-btn">Finalizar Cadastro</button>
                </ContainerButton>
            </Form>
        </SectionContainer>
    )
};
export default RegisterForm;