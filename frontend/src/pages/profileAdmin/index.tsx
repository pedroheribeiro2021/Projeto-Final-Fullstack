import { Header } from "../../components/Header";
import { ProfileAdminStyle } from "./style";
import { Footer } from "../../components/Footer";
import { CardsAdmin } from "../../components/CardsAdmin";
import { useContextFunction } from "../../contexts/homeContexts";
import { Modal } from "../../components/ModalCreateAnnouncement";
import { ModalEdit } from "../../components/ModalEditAnnouncement";
import { ModalEditProfile } from "../../components/ModalEditProfile";
import { ModalEditAddress } from "../../components/ModalEditAddress";
import { useProfile } from "../../contexts/profileContexts";
import { useEffect } from "react";
import defaultUser from "../../assets/user1.png";

export const ProfileAdmin = () => {
  const { setIsModalOpen } = useContextFunction();
  const {
    listAnnouncementsAdmin,
    announcementsAdmin,
    getUserLogged,
    userLogged,
  } = useProfile();

  const id = localStorage.getItem("id");
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    (async () => {
      await listAnnouncementsAdmin(id!);
      await getUserLogged(id!);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <ProfileAdminStyle>
        <ModalEditProfile />
        <ModalEditAddress />
        <div className="container_profile">
          <div className="profile_user_items">
            <div className="profile_img">
              <img src={defaultUser} alt="" />
            </div>
            <div className="profile_text">
              <div className="info_profile">
                <h3>{userLogged?.name}</h3>
                <span>
                  {userLogged?.is_advertiser ? "Anunciante" : "Comprador"}
                </span>
              </div>
              <div className="create_announcement">
                <p>{userLogged?.description}</p>
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
            {announcementsAdmin.length === 0 ? (
              <span id="noAnnoucements">
                Não há anúncios cadastrados para esse usuário
              </span>
            ) : (
              <CardsAdmin />
            )}
          </div>
        </div>
        <Modal />
        <ModalEdit />
        <Footer />
      </ProfileAdminStyle>
    </>
  );
};
