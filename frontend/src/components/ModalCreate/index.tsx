import { useContextFunction } from "../../contexts/homeContexts";
import { ModalStyled } from "./style";
import {AiOutlineClose} from "react-icons/ai"


export const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContextFunction();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ModalStyled
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      
      >
        <div className="container_modal_items">
            <div className="close_modal">
                <h3>Criar anúncio</h3>
                <button onClick={handleCloseModal}>{<AiOutlineClose/>}</button>
            </div>
            <div>
                <p>Informações do veículo</p>
            </div>

        
            <div className="input_modal">
                <label htmlFor="">Marca</label>
                <input type="text" placeholder="Digite a Marca"/>
            </div>

            <div className="input_modal">
                <label htmlFor="">Modelo</label>
                <input type="text"  placeholder="Digite o Modelo"/>
            </div>

            <div className="aditional_inputs">
                <div>
                    <label htmlFor="">Ano</label>
                    <input type="text"  placeholder="Digite o Ano"/>
                </div>
                <div>
                    <label htmlFor="">Combustivel</label>
                    <input type="text" placeholder="Digite o Tipo de Combustível"/>
                </div>
            </div>

            <div className="aditional_inputs">
                <div>
                    <label htmlFor="">Quilometragem</label>
                    <input type="text"placeholder="Digite a Quilometragem" />
                </div>
                <div>
                    <label htmlFor="">Cor</label>
                    <input type="text" placeholder="Digite a Cor" />
                </div>
            </div>

            <div className="aditional_inputs"> 
                <div>

                    <label htmlFor="">Preço tabela FIPE</label>
                    <input type="text"  placeholder="Digite o Preço tabela FIPE"/>
                </div>
                <div>

                    <label htmlFor="">Preço</label>
                    <input type="text" placeholder="Digite o preço"/>
                </div>
            </div>

            <div className="input_description">
                <label htmlFor="">Descrição</label>
                <textarea placeholder="Digite a Descrição"></textarea>
            </div>

            <div className="input_modal">
                <label htmlFor="">Imagem da capa</label>
                <input type="text" placeholder="Link da imagem"/>
            </div>

            <div className="input_modal">
                <label htmlFor="">1° Imagem da galeria</label>
                <input type="text" placeholder="Link da imagem"/>
            </div>

            <div className="input_modal">
                <label htmlFor="">2° Imagem da galeria</label>
                <input type="text" placeholder="Link da imagem" />
            </div>

            <div>
                <button id="add_photo">Adicionar campo para imagem da galeria</button>
            </div>
            
            <div className="button_actions">
                <button id="cancel" onClick={handleCloseModal}>Cancelar</button>
                <button id="create">Criar Anúncio</button>
            </div>
        </div>

      </ModalStyled>
    </>
  );
};
