import * as yup from 'yup';

export const schemaRegisterForm = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    cpf: yup.string().required('Campo obrigatório'),
    cellPhone: yup.string().required('Campo obrigatório'),
    birthday: yup.string().required('Campo obrigatório'),
    description: yup.string(),
    address: yup.object().shape({
      cep: yup.string().required('Campo obrigatório'),
      state: yup.string().required('Campo obrigatório'),
      city: yup.string().required('Campo obrigatório'),
      street: yup.string().required('Campo obrigatório'),
      number: yup.string().required('Campo obrigatório'),
      complement: yup.string(),
    }),
    is_advertiser: yup.boolean().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
    confirmPassword: yup
      .string()
      .required('Campo obrigatório')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  });