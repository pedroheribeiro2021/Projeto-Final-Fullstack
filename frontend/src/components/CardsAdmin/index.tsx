import { CardAdminStyle } from "./style";
import user from "../../assets/user1.png";
import { useContextFunction } from "../../contexts/homeContexts";
import { useProfile } from "../../contexts/profileContexts";
import { useNavigate } from "react-router-dom";

export const CardsAdmin = () => {
  const { setIsModalEdit } = useContextFunction();
  const {announcementsAdmin} = useProfile()
  const navigate = useNavigate()

  return (
    <>
      <CardAdminStyle>
      {announcementsAdmin ? (
          <ul className="container_list_cards">
            {announcementsAdmin.map((announcement) => {
              const coverImage = announcement.images.find((image) => image);
              return (
                <li className="list_cards" key={announcement.id}>
                  <div className="list_cards_img">
                    <img src={coverImage?.imageUrl} alt={announcement.model.model} />
                  </div>
                  <div className="list_cards_text">
                    <h3>{announcement.model.model}</h3>
                    <p>{announcement.description}</p>
                  </div>
                  <div className="list_cards_user">
                    <img src={user} alt={announcement.model.model} />
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
                    <div className="buttons_admin">
                      <button onClick={()=> {
                        setIsModalEdit(true)
                        localStorage.setItem('announcement_id', announcement.id)
                      } 
                      }>Editar</button>
                      <button onClick={() => {
                        localStorage.setItem('announcement_id', announcement.id)
                        navigate('/product-detail')
                      }}>Ver Detalhes</button>
                    </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3>carregando</h3>
        )}
      </CardAdminStyle>
    </>
  );
};

                