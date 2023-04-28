import { Header } from "../../components/Header";
import { ProfileStyle } from "./style";
import user from "../../assets/user.svg";
import { Footer } from "../../components/Footer";
import { Cards } from "../../components/Cards";
import { useEffect } from "react";
import { useContextFunction } from "../../contexts/homeContexts";

export const Profile = () => {
  const {getAllAnnoucements}=useContextFunction()
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
                <h3>Samuel Leão</h3>
                <span>Anunciante</span>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  nemo eligendi, fuga quasi voluptatem cumque. Temporibus sint
                  quo aperiam praesentium commodi iusto, cum suscipit iure
                  reprehenderit ducimus, atque ab rerum?
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
