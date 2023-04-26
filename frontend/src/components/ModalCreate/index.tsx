import { useContextFunction } from "../../contexts/homeContexts";
import { ModalStyled } from "./style";
import {AiOutlineClose} from "react-icons/ai"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAnuncio } from "../../types/home/homeInterface";

export const Modal = () => {
  const { isModalOpen, setIsModalOpen,createAnnouncements } = useContextFunction();


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const imageSchema = yup.object().shape({
    imageUrl: yup.string().required(),
    isCoverImage: yup.boolean()
  })
  
  const formSchema = yup.object().shape({
    mileage: yup.number().required(),
    color: yup.string().required(),
    FIPE_priceTable: yup.number().required(),
    price:  yup.number().required(),
    brand:yup.object().shape({
        brand:yup.string().required()
    }),
    model: yup.object().shape({
        model:yup.string().required()
    }),

    year: yup.object().shape({
       year: yup.string().required()
    }),
    fuel: yup.object().shape({
        fuel:yup.string().required()
    }),
    images:yup.array(imageSchema).required()
  });

  
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
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
                <input type="text" placeholder="Digite a Marca"
                    {...register("brand")}
                />
            </div>

            <div className="input_modal">
                <label htmlFor="">Modelo</label>
                <input type="text"  placeholder="Digite o Modelo"
                {...register("model")}
                />
            </div>

            <div className="aditional_inputs">
                <div>
                    <label htmlFor="">Ano</label>
                    <input type="text"  placeholder="Digite o Ano"
                    {...register("year")}
                    />
                </div>
                <div>
                    <label htmlFor="">Combustivel</label>
                    <input type="text" placeholder="Digite o Tipo de Combustível"
                    {...register("fuel")}
                    />
                </div>
            </div>

            <div className="aditional_inputs">
                <div>
                    <label htmlFor="">Quilometragem</label>
                    <input type="text"placeholder="Digite a Quilometragem" 
                    {...register("mileage")}
                    />
                </div>
                <div>
                    <label htmlFor="">Cor</label>
                    <input type="text" placeholder="Digite a Cor" 
                    {...register("color")}
                    />
                </div>
            </div>

            <div className="aditional_inputs"> 
                <div>

                    <label htmlFor="">Preço tabela FIPE</label>
                    <input type="text"  placeholder="Digite o Preço tabela FIPE"
                    {...register("FIPE_priceTable")}
                    />
                </div>
                <div>

                    <label htmlFor="">Preço</label>
                    <input type="text" placeholder="Digite o preço"
                    {...register("price")}
                    />
                </div>
            </div>

            <div className="input_description">
                <label htmlFor="">Descrição</label>
                <input  placeholder="Digite a Descrição"
                {...register("brand")}
                />
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
                <button id="create" onClick={()=>handleSubmit(createAnnouncements)}>Criar Anúncio</button>
            </div>
        </div>

      </ModalStyled>
    </>
  );
};
