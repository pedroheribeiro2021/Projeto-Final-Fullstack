import { Header } from "../../components/Header";
import { ProfileStyle } from "./style";
import { Footer } from "../../components/Footer";
import { Cards } from "../../components/Cards";
import { useEffect } from "react";
import { useContextFunction } from "../../contexts/homeContexts";
import { useLogin } from "../../contexts/loginContext";

export const Profile = () => {
  const {getAllAnnoucements}=useContextFunction()
  const { user } = useLogin();

  useEffect( ()=>{
    (async()=>{

        await getAllAnnoucements()
    })()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  return (
    <>
      <Header />
      <ProfileStyle>
        <div className="container_profile">
          <div className="profile_user_items">
            <div className="profile_img">
              <img src={user} alt="" />
            </div>
            <div className="profile_text">
              <div className="info_profile">
                <h3>{user.name}</h3>
                <span>Comprador</span>
              </div>
              <div>
                <p>
                {user.description}
                </p>
              </div>
            </div>
          </div>
            <div className="container_cards">
                <h3>Anúncios</h3>
                  <Cards/> 
            </div>
        </div>
      <Footer/>
      </ProfileStyle>
    </>
  );
};
