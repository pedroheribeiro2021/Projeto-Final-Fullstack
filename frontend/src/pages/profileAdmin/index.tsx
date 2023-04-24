import { Header } from "../../components/Header";
import { ProfileAdminStyle } from "./style";
import user from "../../assets/user.svg";
import { Footer } from "../../components/Footer";
import { CardsAdmin } from "../../components/CardsAdmin";
import { useContextFunction } from "../../contexts/homeContexts";
import { Modal } from "../../components/ModalCreate";
import { ModalEdit } from "../../components/ModalEdit";


export const ProfileAdmin = () => {
  const { setIsModalOpen } = useContextFunction();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  return (
    <>
      <Header />
      <ProfileAdminStyle>
        <div className="container_profile">
          <div className="profile_user_items">
            <div className="profile_img">
              <img src={user} alt="" />
            </div>
            <div className="profile_text">
              <div className="info_profile">
                <h3>Samuel Leão</h3>
                <span>Anunciante</span>
              </div>
              <div className="create_announcement">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  nemo eligendi, fuga quasi voluptatem cumque. Temporibus sint
                  quo aperiam praesentium commodi iusto, cum suscipit iure
                  reprehenderit ducimus, atque ab rerum?
                </p>
                <div>
                  <button id="create" onClick={handleOpenModal}>
                    Criar Anúncio
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container_cards">
            <h3>Anúncios</h3>
            <CardsAdmin />
          </div>
        </div>
        <Modal />
        <ModalEdit/>
        <Footer />
        

      
      </ProfileAdminStyle>
    </>
  );
};
