import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUser, IUserRequest, IUserUpdate } from '../interfaces/user/user.interface'

export const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    cpf: yup.string().required(),
    cellPhone: yup.string().required(),
    birthday: yup.string().required(),
    description: yup.string().required(),
    is_advertiser: yup.boolean().required(),
    address: yup.object()
})

export const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
    updatedAt: yup.date().required(),
    createdAt: yup.date().required(),
    address: yup.object().shape({
        cep: yup.string().required(),
        state: yup.string().required(),
        city: yup.string().required(),
        street: yup.string().required(),
        number: yup.string().required(),
        complement: yup.string()
    }),
    is_advertiser: yup.boolean().required(),
    description: yup.string().required(),
    birthday: yup.string().required(),
    cellPhone: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
})

export const updateUserSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired(),
    cpf: yup.string().notRequired(),
    cellPhone: yup.string().notRequired(),
    birthday: yup.string().notRequired(),
    description: yup.string().notRequired(),
    is_advertiser: yup.boolean().notRequired(),
    address: yup.object(),
})