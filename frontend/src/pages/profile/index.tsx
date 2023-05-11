import { Header } from "../../components/Header";
import { ProfileStyle } from "./style";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { useProfile } from "../../contexts/profileContexts";
import { useNavigate, Navigate } from "react-router-dom";
import defaultUser from "../../assets/user1.png";
import { useContextFunction } from "../../contexts/homeContexts";
import { IUser } from "../../types/home/homeInterface";
import { api } from "../../services/api";

export const Profile = () => {
  const { getAnnoucementsByUserPublished, announcements } =
    useContextFunction();
  const { listAnnouncementsAdmin } = useProfile();
  const [userProfile, setUserProfile] = useState<IUser | null>();
  const navigate = useNavigate();

  const id = localStorage.getItem("id");
  const profileId = localStorage.getItem("userPublished_id");

  const loadUserProfile = async (id: string) => {
    try {
      const { data } = await api.get(`/user/${id}`);
      setUserProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await listAnnouncementsAdmin(id!);
      await getAnnoucementsByUserPublished();
      await loadUserProfile(profileId!);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileId]);

  return (
    <>
      {profileId ? (
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
                    <h3>{userProfile?.name}</h3>
                    <span>Comprador</span>
                  </div>
                  <div>
                    <p>{userProfile?.description}</p>
                  </div>
                </div>
              </div>
              <div className="container_cards">
                <h3>Anúncios</h3>
                {announcements ? (
                  <ul className="container_list_cards">
                    {announcements.map((announcement) => {
                      const coverImage = announcement.images.find(
                        (image) => image
                      );
                      return (
                        <li className="list_cards" key={announcement.id}>
                          <div className="list_cards_img">
                            <img
                              src={coverImage?.imageUrl}
                              alt={announcement.model.model}
                            />
                          </div>
                          <div className="list_cards_text">
                            <h3
                              onClick={() => {
                                localStorage.setItem(
                                  "announcement_id",
                                  announcement.id
                                );
                                navigate("/product-detail");
                              }}
                            >
                              {announcement.model.model}
                            </h3>
                            <p>{announcement.description}</p>
                          </div>
                          <div className="list_cards_user">
                            <img
                              src={defaultUser}
                              alt={announcement.model.model}
                            />
                            <span>{announcement.user.name}</span>
                          </div>
                          <div className="list_cards_info">
                            <div className="info_car">
                              <span>{announcement.mileage} KM</span>
                              <span>{announcement.year.year}</span>
                            </div>
                            <div className="info_car_price">
                              <span>
                                {announcement.price.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <h3>carregando</h3>
                )}
              </div>
            </div>
            <Footer />
          </ProfileStyle>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};
