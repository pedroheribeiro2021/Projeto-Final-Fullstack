import { AiOutlineClose } from "react-icons/ai";
import { ModalRecoverStyled } from "./style";
import { useLogin } from "../../contexts/loginContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { recoverUser } from "../../services/user/userApi";

interface IUserRecover {
    email: string
}

export const ModalRecoverPassword = () => {

    const { isModalOpen, setIsModalOpen } = useLogin();

    const { register, handleSubmit } = useForm<IUserRecover>();
    
    const closeModal = () => setIsModalOpen(false)

    const onSubmit: SubmitHandler<IUserRecover> = (data:any) => {
        recoverUser(data)
        closeModal()
    }

    return (
        <>
            <ModalRecoverStyled
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <div className="container_modal_items">
                    <div className="close_modal">
                        <h3 className="heading-7-500">Recuperação de senha</h3>
                        <button onClick={closeModal}>{<AiOutlineClose/>}</button>
                    </div>
                <div>
                    <p className="body-1-400">Informe o e-mail de cadastro</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="input_modal">
                    <input type="email" id="email" placeholder="Digite o e-mail" {...register('email')}/>
                    <button type="submit" className="brand1-btn">Recuperar Senha</button>
                </form>
                </div>
            </ModalRecoverStyled>
        </>
    )
}