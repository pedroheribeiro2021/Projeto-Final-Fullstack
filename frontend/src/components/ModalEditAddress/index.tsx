import { AiOutlineClose } from "react-icons/ai";
import { useLogin } from "../../contexts/loginContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAddressUpdate } from "../../types/editAddress/editAddressInterface";
import { EditAddress } from "../../services/address/addressApi";
import { ModalEditAddressStyled } from "./style";


export const ModalEditAddress = () => {
    const { isEditAddressModalOpen, setIsEditAddressModalOpen } = useLogin();

    const { register, handleSubmit } = useForm<IAddressUpdate>();

    const closeModal = () => setIsEditAddressModalOpen(false)

    const onSubmit: SubmitHandler<IAddressUpdate> = (data:any) => {
        EditAddress(data)
        closeModal()
    }

    return (
        <>
            <ModalEditAddressStyled
                isOpen={isEditAddressModalOpen}
                onRequestClose={closeModal}
                overlayClassName="modal-overlay"
                className="modal-content"
            >
            <div className="container_modal_items">
            <div className="close_modal">
                <h3>Editar endereço</h3>
                <button onClick={closeModal}>{<AiOutlineClose/>}</button>
            </div>
            <div>
                <p>Infomações de endereço</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input_modal">
                    <label htmlFor="">CEP</label>
                    <input type="text" id="cep" placeholder="89888.888" {...register('cep')}/>
                </div>

                <div className="side">
                    <div className="aditional_inputs">
                        <label htmlFor="">Estado</label>
                        <input type="text"  placeholder="Paraná" {...register('state')}/>
                    </div>
                    <div className="aditional_inputs">
                        <label htmlFor="">Cidade</label>
                        <input type="text"  placeholder="Curitiba" {...register('city')}/>
                    </div>
                </div>

                <div className="input_modal">
                    <label htmlFor="">Rua</label>
                    <input type="text" id="street"  placeholder="Rua do paraná" {...register('street')}/>
                </div>
                <div className="side">
                    <div className="aditional_inputs">
                        <label htmlFor="">Número</label>
                        <input type="text" id="number" placeholder="1029" {...register('number')}/>
                    </div>
                    <div className="aditional_inputs">
                        <label htmlFor="">Complemento</label>
                        <input type="text" id="complement" placeholder="Rua do paraná" {...register('complement')}/>
                    </div>
                </div>
                
                
                <div className="button_actions">
                    <button className="grey6-btn" onClick={closeModal} id="cancel" >Cancelar</button>
                    <button className="brand1-btn" type="submit" id="save">Salvar Alterações</button>
                </div>
            </form>
            </div>
            </ModalEditAddressStyled>
        </>
    )
}