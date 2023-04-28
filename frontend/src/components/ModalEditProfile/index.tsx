/* eslint-disable jsx-a11y/anchor-is-valid */
import { AiOutlineClose } from "react-icons/ai";
import { useLogin } from "../../contexts/loginContext";
import { IUserUpdate } from "../../types/editProfile/editProfileInterface";
import { SubmitHandler, useForm } from "react-hook-form";
import { deleteUser, editUser } from "../../services/user/userApi";
import { ModalEditProfileStyled } from "./style";


export const ModalEditProfile = () => {
    const { isModalOpen, setIsModalOpen } = useLogin();

    const { register, handleSubmit } = useForm<IUserUpdate>();

    const closeModal = () => setIsModalOpen(false)

    const onSubmit: SubmitHandler<IUserUpdate> = (data:any) => {
        editUser(data)
        // closeModal()
    }

    const onDelete = () => deleteUser()

    return (
        <>
            <ModalEditProfileStyled
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                overlayClassName="modal-overlay"
                className="modal-content"
            >
            <div className="container_modal_items">
            <div className="close_modal">
                <h3>Editar perfil</h3>
                <button onClick={closeModal}>{<AiOutlineClose/>}</button>
            </div>
            <div>
                <p className="body-1-400">Infomações pessoais</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input_modal">
                    <label htmlFor="">Nome</label>
                    <input type="text" id="name" placeholder="Digite o Nome" {...register('name')}/>
                </div>

                <div className="input_modal">
                    <label htmlFor="">Email</label>
                    <input type="text"  placeholder="samuel@kenzie.com.br" {...register('email')}/>
                </div>

                <div className="input_modal">
                    <label htmlFor="">CPF</label>
                    <input type="text" id="cpf"  placeholder="999.999.999-99" {...register('cpf')}/>
                </div>

                <div className="input_modal">
                    <label htmlFor="">Celular</label>
                    <input type="text" id="cellPhone" placeholder="(084) 90909-9092" {...register('cellPhone')}/>
                </div>

                <div className="input_modal">
                    <label htmlFor="">Data de nascimento</label>
                    <input type="date" id="birthday" placeholder="" {...register('birthday')}/>
                </div>

                <div className="input_description">
                    <label htmlFor="">Descrição</label>
                    <textarea id="description" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" {...register('description')}></textarea>
                </div>
                <div className="button_actions">
                    <a className="grey6-btn" id="cancel" >Cancelar</a>
                    <a className="alert1-btn" onClick={onDelete} id="exclude">Excluir Perfil</a>
                    <button className="brand1-btn" type="submit" id="save">Salvar Alterações</button>
                </div>
            </form>
            </div>
            </ModalEditProfileStyled>
        </>
    )
}