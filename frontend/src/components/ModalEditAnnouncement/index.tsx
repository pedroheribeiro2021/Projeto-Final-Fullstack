import { useContextFunction } from "../../contexts/homeContexts";
import { AiOutlineClose } from "react-icons/ai";
import { ModalEditStyled } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  IProfileContext,
  ProfileContext,
  useProfile,
} from "../../contexts/profileContexts";
import { useContext, useEffect, useState } from "react";
import { ErrorMessage } from "../../pages/register/style";
import {
  deleteAnnouncement,
  updateAnnouncement,
} from "../../services/annoucement/annoucementApi";
import { api } from "../../services/api";

export const ModalEdit = () => {
  const { isModalEdit, setIsModalEdit } = useContextFunction();

  const {
    brandCreate,
    listBrand,
    modelList,
    listCars,
    getModelInfo,
    modelInfoYear,
    modelInfoFuel,
    modelInfoFuelText,
    modelInfoFipePrice,
    announcementModalEdit,
  } = useProfile();

  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedModel, setSelectedModel] = useState("");

  const { listAnnouncementsAdmin }: IProfileContext =
    useContext(ProfileContext);

  const id = localStorage.getItem("id");

  useEffect(() => {
    (async () => {
      await listCars(selectedBrand);
      await getModelInfo(selectedBrand, selectedModel);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedBrand,
    selectedModel,
    modelInfoYear,
    modelInfoFuel,
    modelInfoFuelText,
    modelInfoFipePrice,
  ]);

  const handleCloseModalEdit = () => {
    setIsModalEdit(false);
  };

  const formSchema = yup.object().shape({
    mileage: yup.number().notRequired(),
    color: yup.string().notRequired(),
    price: yup.number().notRequired(),
    description: yup.string().notRequired(),
    brand: yup.string().notRequired(),
    model: yup.string().notRequired(),
    year: yup.string().notRequired(),
    fuel: yup.string().notRequired(),
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

  useEffect(() => {
    (async () => {
      await listBrand();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = () => {
    deleteAnnouncement();
    setIsModalEdit(false);
    listAnnouncementsAdmin(id!);
  };

  return (
    <>
      <ModalEditStyled
        isOpen={isModalEdit}
        onRequestClose={handleCloseModalEdit}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <form onSubmit={handleSubmit(updateAnnouncement)}>
          <div className="container_modal_items">
            <div className="close_modal">
              <h3>Editar anúncio</h3>
              <button onClick={handleCloseModalEdit}>
                {<AiOutlineClose />}
              </button>
            </div>
            <div>
              <p>Informações do veículo</p>
            </div>

            <div className="input_modal">
              <label htmlFor="">Marca</label>
              <select
                {...register("brand")}
                onChange={(ev) => setSelectedBrand(ev.target.value)}
              >
                {brandCreate.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
              {/* {errors.brand && <ErrorMessage>Campo obrigatório</ErrorMessage>} */}
            </div>

            <div className="input_modal">
              <label htmlFor="">Modelo</label>

              <select
                {...register("model")}
                onChange={(el) => setSelectedModel(el.target.value)}
              >
                {[...new Set(modelList.map((el) => el.name))].map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>

              {/* {errors.model && <ErrorMessage>Campo obrigatório</ErrorMessage>} */}
            </div>

            <div className="aditional_inputs">
              <div>
                <label htmlFor="">Ano</label>
                <input
                  type="text"
                  placeholder="Ano"
                  value={modelInfoYear}
                  {...register("year")}
                />
                {/* {errors.year && <ErrorMessage>Campo obrigatório</ErrorMessage>} */}
              </div>
              <div className="select_fuel">
                <label htmlFor="">Combustivel</label>
                {
                  <select {...register("fuel")}>
                    <option value={modelInfoFuel}>{modelInfoFuelText}</option>
                  </select>
                }
                {/* {errors.fuel && <ErrorMessage>Campo obrigatório</ErrorMessage>} */}
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
              </div>
              <div>
                <label htmlFor="">Cor</label>
                <input
                  type="text"
                  placeholder="Digite a Cor"
                  {...register("color")}
                />
              </div>
            </div>

            <div className="aditional_inputs">
              <div>
                <label htmlFor="">Preço tabela FIPE</label>
                <input
                  type="text"
                  placeholder="Digite o Preço tabela FIPE"
                  value={modelInfoFipePrice}
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
              </div>
            </div>

            <div className="input_description">
              <label htmlFor="">Descrição</label>
              <input
                placeholder="Digite a Descrição"
                {...register("description")}
              />
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
              <button
                id="add_photo"
                type="button"
                onClick={handleAddImageField}
              >
                Adicionar campo para imagem da galeria
              </button>
            </div>

            <div className="button_actions">
              <a className="alert1-btn" onClick={onDelete} id="exclude">
                Excluir Anúncio
              </a>
              <button id="save">Salvar Alterações</button>
            </div>
          </div>
        </form>
      </ModalEditStyled>
    </>
  );
};
