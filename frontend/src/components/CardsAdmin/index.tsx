import { CardAdminStyle } from "./style";
import car1 from "../../assets/carro1.svg";

import user from "../../assets/user1.png";
import { useContextFunction } from "../../contexts/homeContexts";
import { useProfile } from "../../contexts/profileContexts";

export const CardsAdmin = () => {
  const { setIsModalEdit } = useContextFunction();
  const {announcementsAdmin} = useProfile()


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
                      <button onClick={()=>setIsModalEdit(true)}>Editar</button>
                      <button>Ver Detalhes</button>
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

                