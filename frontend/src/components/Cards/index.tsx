import { CardStyle } from "./style";
import { getAllAnnoucements } from "../../services/annoucement/annoucementApi";
import { useState, useEffect } from "react";
import { IAnuncio } from "../../types/home/homeInterface";
import user from "../../assets/user.svg"

export const Cards = () => {
  const [anuncios, setAnuncios] = useState<IAnuncio[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllAnnoucements();
      setAnuncios(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <CardStyle>
        <ul className="container_list_cards">
          {anuncios.map((anuncio:IAnuncio) => {
            const coverImage = anuncio.images.find(image => image);
            return (
              <li className="list_cards" key={anuncio.id}>
                <div className="list_cards_img">
                  <img src={coverImage?.imageURL} alt={anuncio.model.model} />
                </div>
                <div className="list_cards_text">
                  <h3>{anuncio.model.model}</h3>
                </div>
                <div className="list_cards_user">
                  <img src={user} alt={anuncio.model.model} />
                  <span>{anuncio.user.name}</span>
                </div>
                <div className="list_cards_info">
                  <div className="info_car">
                    <span>{anuncio.mileage} KM</span>
                    <span>{anuncio.year.year}</span>
                  </div>
                  <div className="info_car_price">
                    <span>R$ {anuncio.price}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </CardStyle>
    </>
  );
};