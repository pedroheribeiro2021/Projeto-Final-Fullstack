export interface UserRequest{
    name: string;
    email: string;
    cpf: string;
    cellPhone: string;
    birthday: string;
    description: string;
    is_advertiser: boolean;
    password: string;
    confirmPassword: string;
    address: {
        cep: string;
        state: string;
        city: string;
        street: string;
        number: string;
        complement: string;
    }
}