export interface IUserRequest {
    name: string
    email: string
    password: string
    confirmPassword: string
    cpf: string
    cellPhone: string
    birthday: string
    description: string
    is_advertiser: boolean
    // address: IAddressRequest
}

export interface IUser {
    id: string 
    name: string
    email: string
    password: string
    confirmPassword: string
    cpf: string
    cellPhone: string
    birthday: string
    description: string
    is_advertiser: boolean
    createdAt: Date
    updatedAt: Date
}

export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
    cpf?: string
    cellPhone?: string
    birthday?: string
    description?: string
    is_advertiser?: boolean
    // address: IAddressRequest
}

export interface IUserLogin {
    email: string
    password: string
}