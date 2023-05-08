import { Header } from "../../components/Header";
import { ProfileStyle } from "./style";
import { Footer } from "../../components/Footer";
import { Cards } from "../../components/Cards";
import { useEffect } from "react";
import { useLogin } from "../../contexts/loginContext";
import defaultUser from "../../assets/user1.png";
import { useProfile } from "../../contexts/profileContexts";

export const Profile = () => {
  const { listAnnouncementsAdmin, announcementsAdmin } = useProfile();
  const { user } = useLogin();

  const id = localStorage.getItem("id");
  useEffect(() => {
    (async () => {
      await listAnnouncementsAdmin(id!);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <ProfileStyle>
        <div className="container_profile">
          <div className="profile_user_items">
            <div className="profile_img">
              <img src={defaultUser} alt="" />
            </div>
            <div className="profile_text">
              <div className="info_profile">
                <h3>{user?.name}</h3>
                <span>Comprador</span>
              </div>
              <div>
                <p>{user?.description}</p>
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
              <Cards />
            )}
          </div>
        </div>
        <Footer />
      </ProfileStyle>
    </>
  );
};
