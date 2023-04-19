import { Maybe } from "yup/lib/types"
import { IAddressRequest } from "../address/address.interface"

export interface IUserRequest {
    name: string
    email: string
    password: string
    cpf: string
    cellPhone: string
    birthday: string
    description: string
    is_advertiser: boolean
    address: IAddressRequest
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
}

export interface IUserLogin {
    email: string
    password: string
}