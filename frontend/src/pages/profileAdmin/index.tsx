import { Header } from "../../components/Header";
import { ProfileAdminStyle } from "./style";
import user from "../../assets/user.svg";
import { Footer } from "../../components/Footer";
import { CardsAdmin } from "../../components/CardsAdmin";
import { useContextFunction } from "../../contexts/homeContexts";
import { Modal } from "../../components/ModalCreate";
import { ModalEdit } from "../../components/ModalEdit";
import { ModalEditProfile } from "../../components/ModalEditProfile";
import { ModalEditAddress } from "../../components/ModalEditAddress";
import { useProfile } from "../../contexts/profileContexts";
import { useEffect } from "react";
import { useLogin } from "../../contexts/loginContext";


export const ProfileAdmin = () => {
  const { setIsModalOpen } = useContextFunction();
  const{listAnnouncementsAdmin} = useProfile();
  const { user } = useLogin();


  const id = localStorage.getItem("id")
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  useEffect( ()=>{
    (async()=>{

        await listAnnouncementsAdmin(id!)
    })()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  return (
    <>
      <Header />
      <ProfileAdminStyle>
      <ModalEditProfile/>
      <ModalEditAddress/>
        <div className="container_profile">
          <div className="profile_user_items">
            <div className="profile_img">
              <img src={user} alt="" />
            </div>
            <div className="profile_text">
              <div className="info_profile">
                {/* <h3>{user.name}</h3> */}
                {/* <span>{user.is_advertiser ? "Anunciante": "Comprador"}</span> */}
              </div>
              <div className="create_announcement">
                <p>
                  {/* {user.description} */}
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
