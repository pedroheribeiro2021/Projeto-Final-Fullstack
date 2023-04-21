import { useContextFunction } from "../../contexts/homeContexts";
import {AiOutlineClose} from "react-icons/ai"
import { ModalEditStyled } from "./style";


export const ModalEdit = () => {
  const { isModalEdit, setIsModalEdit } = useContextFunction();

  const handleCloseModalEdit = () => {
    setIsModalEdit(false);
  };

  return (
    <>
      <ModalEditStyled
        isOpen={isModalEdit}
        onRequestClose={handleCloseModalEdit}
        overlayClassName="modal-overlay"
        className="modal-content"
      
      >
        <div className="container_modal_items">
            <div className="close_modal">
                <h3>Editar anúncio</h3>
                <button onClick={handleCloseModalEdit}>{<AiOutlineClose/>}</button>
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

            <div className="buttons_pub">
                <label htmlFor="">Publicado</label>
                <div>
                    <button>Sim</button>
                    <button>Não</button>
                </div>
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
                <button id="exclude" >Excluir Anúncio</button>
                <button id="save">Salvar Alterações</button>
            </div>
        </div>

      </ModalEditStyled>
    </>
  );
};
