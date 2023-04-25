import { CardStyle } from "./style";
// import { getAllAnnoucements } from "../../services/annoucement/annoucementApi";
// import { useState, useEffect } from "react";

import user from "../../assets/user1.png"
import { useContextFunction } from "../../contexts/homeContexts";

export const Cards = () => {
  // const [announcements, setannouncements] = useState<IAnuncio[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getAllAnnoucements();
  //     setAnuncios(result);
  //   };
  //  fetchData()
  // }, []);
  const {announcements} = useContextFunction()

  return (
    <>
      <CardStyle>
        {announcements ? (
          <ul className="container_list_cards">
            {announcements.map((announcement) => {
              const coverImage = announcement.images.find((image) => image);
              return (
                <li className="list_cards" key={announcement.id}>
                  <div className="list_cards_img">
                    <img src={coverImage?.imageUrl} alt={announcement.model.model} />
                  </div>
                  <div className="list_cards_text">
                    <h3>{announcement.model.model}</h3>
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
                </li>
              );
            })}
          </ul>
        ) : (
          <h3>carregando</h3>
        )}
      </CardStyle>
    </>
  );
};
