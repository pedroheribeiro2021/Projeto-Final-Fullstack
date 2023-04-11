import { Maybe } from "yup/lib/types"

export interface IUserRequest {
    name: string
    email: string
    password: string
    cpf: string
    cellPhone: string
    birthday: string
    description: string
    is_advertiser: boolean
    address: {
        cep: string
        state: string
        city: string
        street: string
        number: string
        complement: string
    }
}

export interface IUser {
    id: string 
    name: string
    email: string
    cpf: string
    cellPhone: string
    birthday: string
    description: string
    is_advertiser: boolean
    address: {
        cep: string
        state: string
        city: string
        street: string
        number: string
        complement: string
    }
    createdAt: Date
    updatedAt: Date
}

export interface IUserUpdate {
    name?: Maybe<string | undefined>
    email?: Maybe<string | undefined>
    password?: Maybe<string | undefined>
    cpf?: Maybe<string | undefined>
    cellPhone?: Maybe<string | undefined>
    birthday?: Maybe<string | undefined>
    description?: Maybe<string | undefined>
    is_advertiser?: Maybe<boolean | undefined>
    address?: {
        cep: string
        state: string
        city: string
        street: string
        number: string
        complement: string
    }
}

export interface IUserLogin {
    email: string
    password: string
}