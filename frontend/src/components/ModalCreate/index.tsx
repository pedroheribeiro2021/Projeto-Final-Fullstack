import { useContextFunction } from "../../contexts/homeContexts";
import { ModalStyled } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { ErrorMessage } from "../../pages/register/style";
/* import { IAnuncio } from "../../types/home/homeInterface"; */

export const Modal = () => {
  const { isModalOpen, setIsModalOpen, createAnnouncements } =
    useContextFunction();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formSchema = yup.object().shape({
    mileage: yup.number().required(),
    color: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required(),
    fuel: yup.string().required(),
    images: yup.array().of(
      yup.object().shape({
        imageUrl: yup.string(),
        isCoverImage: yup.boolean(),
      })
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [numberOfImages, setNumberOfImages] = useState(2);

  const handleAddImageField = () => {
    setNumberOfImages((prev) => prev + 1);
  };

  return (
    <>
      <ModalStyled
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <form onSubmit={handleSubmit(createAnnouncements)}>
          <div className="container_modal_items">
            <div className="close_modal">
              <h3>Criar anúncio</h3>
              <button onClick={handleCloseModal}>{<AiOutlineClose />}</button>
            </div>
            <div>
              <p>Informações do veículo</p>
            </div>

            <div className="input_modal">
              <label htmlFor="">Marca</label>
              <input
                type="text"
                placeholder="Digite a Marca"
                {...register("brand")}
              />
              {errors.brand && <ErrorMessage>Campo obrigatório</ErrorMessage>}
              
            </div>

            <div className="input_modal">
              <label htmlFor="">Modelo</label>
              <input
                type="text"
                placeholder="Digite o Modelo"
                {...register("model")}
              />
              {errors.model && <ErrorMessage>Campo obrigatório</ErrorMessage>}
            </div>

            <div className="aditional_inputs">
              <div>
                <label htmlFor="">Ano</label>
                <input
                  type="text"
                  placeholder="Digite o Ano"
                  {...register("year")}
                />
                {errors.year && <ErrorMessage>Campo obrigatório</ErrorMessage>}
              </div>
              <div>
                <label htmlFor="">Combustivel</label>
                <input
                  type="text"
                  placeholder="Digite o Tipo de Combustível"
                  {...register("fuel")}
                />
                {errors.fuel && <ErrorMessage>Campo obrigatório</ErrorMessage>}
              </div>
            </div>

            <div className="aditional_inputs">
              <div>
                <label htmlFor="">Quilometragem</label>
                <input
                  type="text"
                  placeholder="Digite a Quilometragem"
                  {...register("mileage")}
                />
                {errors.mileage && <ErrorMessage>Campo obrigatório</ErrorMessage>}
              </div>
              <div>
                <label htmlFor="">Cor</label>
                <input
                  type="text"
                  placeholder="Digite a Cor"
                  {...register("color")}
                />
                {errors.color && <ErrorMessage>Campo obrigatório</ErrorMessage>}
              </div>
            </div>

            <div className="aditional_inputs">
              <div>
                <label htmlFor="">Preço tabela FIPE</label>
                <input
                  type="text"
                  placeholder="Digite o Preço tabela FIPE"
                  {...register("FIPE_priceTable")}
                />
              </div>
              <div>
                <label htmlFor="">Preço</label>
                <input
                  type="text"
                  placeholder="Digite o preço"
                  {...register("price")}
                />
                {errors.price && <ErrorMessage>Campo obrigatório</ErrorMessage>}
              </div>
            </div>

            <div className="input_description">
              <label htmlFor="">Descrição</label>
              <input
                placeholder="Digite a Descrição"
                {...register("description")}
              />
              {errors.description && <ErrorMessage>Campo obrigatório</ErrorMessage>}
            </div>

            <div className="input_modal">
              <label htmlFor="">Imagem da capa</label>
              <input
                type="text"
                placeholder="Link da imagem"
                {...register(`images.0.imageUrl`)}
              />
              
            </div>

            {[...Array(numberOfImages)].map((_, index) => (
              <div className="input_modal" key={`image_${index}`}>
                <label htmlFor="">{`${index + 1}° Imagem da galeria`}</label>
                <input
                  type="text"
                  placeholder="Link da imagem"
                  {...register(`images.${index + 1}.imageUrl`)}
                />
          
              </div>
            ))}

            <div>
              <button id="add_photo" onClick={handleAddImageField}>
                Adicionar campo para imagem da galeria
              </button>
            </div>

            <div className="button_actions">
              <button id="cancel" onClick={handleCloseModal}>
                Cancelar
              </button>
              <button id="create" type="submit">
                Criar Anúncio
              </button>
            </div>
          </div>
        </form>
      </ModalStyled>
    </>
  );
};
