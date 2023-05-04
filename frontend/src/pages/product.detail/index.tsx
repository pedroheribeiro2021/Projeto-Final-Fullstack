import { Header } from "../../components/Header";
import car from "../../assets/car-detail.svg";
import user from "../../assets/user.svg";
import user1 from "../../assets/user1.svg";
import user2 from "../../assets/user2.svg";
import ellipse from "../../assets/Ellipse 3.svg";
import { Footer } from "../../components/Footer";
import { ModalImageStyled, ProductDetailStyle } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { ListComment, createComment } from "../../services/comment/commentApi";
import { IComment } from "../../types/comment/commentInterface";
import { useEffect, useState } from "react";
import { useProfile } from "../../contexts/profileContexts";
import { api } from "../../services/api";
// import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../contexts/loginContext";
import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

export const ProductDetail = () => {
  const { register, handleSubmit } = useForm();
  const { announcementsAdmin, comments, setComments } = useProfile();
  const { user } = useLogin();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  // ListComment(id!)

  useEffect(() => {
    const getComments = async () => {
      const id = localStorage.getItem("announcement_id");
      try {
        const response = await api.get(`announcement/comments/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getComments();
  }, []);

  const onSubmit: SubmitHandler<any> = (data: any) => {
    createComment(data);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <Header />
      <ProductDetailStyle>
        {comments.map((announcement) => {
          const coverImage = announcement.images.find((image: any) => image);
          return (
            <div className="container_items">
              <div className="vehicle-apresentation">
                <div className="vehicle-informations">
                  <div className="container_img">
                    <img
                      className="princialp-image"
                      src={coverImage?.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="vehicle-detail">
                    <h3 className="heading-6-600">
                      {announcement.model.model}
                    </h3>
                    <div className="vehicle-detail_text">
                      <div className="vehicle_detail_text_span">
                        <span>{announcement.year.year}</span>
                        <span>{announcement.mileage} KM</span>
                      </div>
                      <div>
                        <p className="heading-7-500">R$ {announcement.price}</p>
                      </div>
                    </div>
                    <button className="brand1-btn">Comprar</button>
                  </div>
                  <div className="vehicle-description">
                    <h3 className="heading-6-600">Descrição</h3>
                    <p className="body-1-400">{announcement.description}</p>
                  </div>
                  <aside>
                    <div className="gallery">
                      <div>
                        <h3 className="heading-6-600">Fotos</h3>
                      </div>
                      <div className="photos_gallery">
                        {announcement.images.map((image: any, i: number) => {
                          return (
                            <>
                              <img
                                onClick={() => setModalIsOpen(true)}
                                src={image.imageUrl}
                                alt=""
                              />
                              <ModalImageStyled
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                overlayClassName="modal-overlay"
                                className="modal-content"
                              >
                                <div className="container_modal_items">
                                  <div className="close_modal">
                                    <h3>Imagem do veículo</h3>
                                    <button onClick={closeModal}>
                                      {<AiOutlineClose />}
                                    </button>
                                  </div>
                                  <img src={image.imageUrl} alt="" />
                                </div>
                              </ModalImageStyled>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className="seller-card">
                      <img src={user} alt="" />
                      <h3 className="heading-6-600">
                        {announcement.user.name}
                      </h3>
                      <p className="body-1-400">
                        {announcement.user.description}
                      </p>
                      <button
                        className="grey0-btn"
                        onClick={() => navigate("/profile")}
                      >
                        Ver todos os anúncios
                      </button>
                    </div>
                  </aside>

                  <div className="coments-space">
                    <h3 className="heading-6-600">Comentários</h3>
                    <ul className="container_list_coments">
                      {comments.length ? (
                        comments.map((announcement) =>
                          announcement.comments.map(
                            (comment: any, i: number) => (
                              <li key={i}>
                                <div className="header-coment">
                                  <img id="user" src={user1} alt="" />
                                  <span className="body-2-500">
                                    {comment.user.name}
                                  </span>
                                  <img src={ellipse} alt="" />
                                  <span className="past_time">
                                    {/* {moment(comment.createdAt).fromNow()} */}
                                  </span>
                                </div>
                                <p className="body-2-400">
                                  {comment.description}
                                </p>
                              </li>
                            )
                          )
                        )
                      ) : (
                        <li></li>
                      )}
                    </ul>
                  </div>
                  <div className="coment-area">
                    <div className="user-coment-header">
                      <img src={user} alt="" />
                      <span className="body-2-500">{user.name}</span>
                    </div>

                    <div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="submit_comment">
                          <textarea
                            maxLength={255}
                            className="input-placeholder"
                            id="description"
                            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                            {...register("description")}
                          />
                          <button
                            className="brand1-btn"
                            id="comment"
                            type="submit"
                          >
                            Comentar
                          </button>
                        </div>
                        <div className="fast_comments">
                          <div>
                            <span
                              onClick={() =>
                                createComment({
                                  description: "Gostei muito",
                                })
                              }
                            >
                              Gostei muito
                            </span>
                            <span
                              onClick={() =>
                                createComment({
                                  description: "Incrível",
                                })
                              }
                            >
                              Incrível
                            </span>
                          </div>
                          <span
                            onClick={() =>
                              createComment({
                                description: "Recomendarei para meus amigos",
                              })
                            }
                          >
                            Recomendarei para meus amigos
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <Footer />
      </ProductDetailStyle>
    </>
  );
};
