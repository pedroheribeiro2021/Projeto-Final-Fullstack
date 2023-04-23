import {HeaderModal, ButtonLoginModal, Form, ErrorMessage, Input, InputContainer, Label, SectionTitle, Title, MainContainer, ContainerButton, BoxTypeAccount} from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "../../contexts/registerContext";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    user: any;
  };

  const RegisterSuccessModal: React.FC<ModalProps> = ({
    isOpen,
    onRequestClose,
    user,
  }) => {
    return (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          contentLabel="Cadastro efetuado com sucesso"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#F6F6F6",
                borderRadius: "10px",
                padding: "40px",
                width: "80%",
                height: "60%",
                maxWidth: "600px",
                maxHeight: "400px",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)",
                border: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1.5rem",
              },
          }}
        >
        <HeaderModal>
          <h2>Sucesso!</h2>
          <button onClick={() => setIsSuccessModalOpen(false)}>X</button>
        </HeaderModal>
          <p>Sua conta foi criada com sucesso!</p>
          <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
          <Link to="/login">
            <ButtonLoginModal className="brand1-btn">Ir para o login</ButtonLoginModal>
          </Link>
        </ReactModal>
      );
  };
  
  const {createUserAccount, errors, handleSubmit, isSuccessModalOpen, register, user, setIsSuccessModalOpen} = useUser();
  
  return (
    <MainContainer>
      <ToastContainer/>
            
      <Header/>
      <Form onSubmit={handleSubmit(createUserAccount)}>
        <Title>Cadastro</Title>

        <SectionTitle>Informações pessoais</SectionTitle>

        <InputContainer>
          <Label htmlFor="name">Nome:</Label>
          <Input className="input-label " placeholder="Ex: Luana Silva" {...register("name", { required: true })} />
          {errors.name && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="email">Email:</Label>
          <Input placeholder="Ex: email@email.com" {...register("email", { required: true })} />
          {errors.email && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>

        <InputContainer>
            <Label htmlFor="cpf">CPF:</Label>
            <Input placeholder="Ex: 000.000.000-00" {...register("cpf", { required: true })} />
            {errors.cpf && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="phone">Celular:</Label>
          <Input placeholder="Ex: (DDD) 90000-0000" {...register("cellPhone", { required: true })} />
          {errors.cellPhone && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>

        <InputContainer>
            <Label htmlFor="birthdate">Data de nascimento:</Label>
            <Input placeholder="00/00/00" type="date" {...register("birthday", { required: true })} />
            {errors.birthday && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>

        <InputContainer>
            <Label htmlFor="description">Descrição:</Label>
            <Input placeholder="Digitar descrição" {...register("description")} />
        </InputContainer>

        <SectionTitle>Informações de endereço</SectionTitle>

        <InputContainer>
            <Label htmlFor="cep">CEP:</Label>
            <Input placeholder="Ex: 00000.000" {...register("address.cep", { required: true })} />
            {errors.address?.cep && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>

        <InputContainer>
            <Label htmlFor="state">Estado:</Label>
            <Input placeholder="Ex: Digitar Estado" {...register("address.state", { required: true })} />
            {errors.address?.state && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>

        <InputContainer>
            <Label htmlFor="city">Cidade:</Label>
            <Input placeholder="Ex: Digitar cidade" {...register("address.city", { required: true })} />
            {errors.address?.city && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>

        <InputContainer>
            <Label htmlFor="street">Rua:</Label>
            <Input placeholder="Ex: Digitar rua" {...register("address.street", { required: true })} />
            {errors.address?.street && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>

        <InputContainer>
            <Label htmlFor="number">Número:</Label>
            <Input placeholder="Digitar número" {...register("address.number", { required: true })}/>
            {errors.address?.number && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>

        <InputContainer>
            <Label htmlFor="complement">Complemento:</Label>
            <Input placeholder="Digitar o complemento" {...register("address.complement", { required: false })}/>
            {errors.address?.complement && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>  

        <InputContainer>
            <Label htmlFor="accountType">Tipo de conta</Label>
            <BoxTypeAccount>
                <button type="button" value='false' className="brand1-btn" {...register("is_advertiser", {required: true})}>Comprador</button>
                <button type="button" id="buttonType2" value='true' className="grey1-btn" {...register("is_advertiser", {required: true})}>Anunciante</button>
            </BoxTypeAccount>
            {errors.is_advertiser && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer>  

        <InputContainer>
            <Label htmlFor="password">Senha:</Label>
            <Input type="password" {...register("password", { required: true })}/>
            {errors.password && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer> 

        <InputContainer>
            <Label htmlFor="confirmPassword">Confirmar senha:</Label>
            <Input type="password" {...register("confirmPassword", { required: true })}/>
            {errors.confirmPassword && <ErrorMessage>Campo obrigatório</ErrorMessage>}
        </InputContainer> 
        
        <ContainerButton>
            <button className="brand1-btn">Finalizar Cadastro</button>
        </ContainerButton>
            </Form>
            <Footer/>
            <RegisterSuccessModal
            isOpen={isSuccessModalOpen}
            onRequestClose={() => setIsSuccessModalOpen(false)}
            user={user}/>
    </MainContainer>
  )
};
export default RegisterForm;