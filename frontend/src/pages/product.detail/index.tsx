import { Header } from "../../components/Header"
import car from "../../assets/car-detail.svg"
import user from "../../assets/user.svg"
import user1 from "../../assets/user1.svg"
import user2 from "../../assets/user2.svg"
import ellipse from "../../assets/Ellipse 3.svg"
import { Footer } from "../../components/Footer"
import { ProductDetailStyle } from "./style"

export const ProductDetail = () => {
  return (
    <>
    
      <Header />
      <ProductDetailStyle>
        <div className="container_items">
          <div className="vehicle-apresentation">
            <div className="vehicle-informations">
              <div className="container_img">
                <img className="princialp-image" src={car} alt="" />
              </div>
              <div className="vehicle-detail">
                <h3 className="heading-6-600">
                  Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                </h3>
                <div className="vehicle-detail_text">
                  <div className="vehicle_detail_text_span">
                    <span>2013</span>
                    <span>0 KM</span>
                  </div>
                  <div>
                    <p className="heading-7-500">R$ 00.000,00</p>
                  </div>
                </div>
                <button className="brand1-btn">Comprar</button>
              </div>
              <div className="vehicle-description">
                <h3 className="heading-6-600">Descrição</h3>
                <p className="body-1-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <aside>
                <div className="gallery">
                  <div>
                    <h3 className="heading-6-600">Fotos</h3>
                  </div>
                  <div className="photos_gallery">
                    <img src={car} alt="" />
                    <img src={car} alt="" />
                    <img src={car} alt="" />
                    <img src={car} alt="" />
                    <img src={car} alt="" />
                    <img src={car} alt="" />
                  </div>
                  
                </div>
                <div className="seller-card">
                  <img src={user} alt="" />
                  <h3 className="heading-6-600">Samuel Leão</h3>
                  <p className="body-1-400">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <button className="grey0-btn">Ver todos os anúncios</button>
                </div>
            </aside>

              <div className="coments-space">
                <h3 className="heading-6-600">Comentários</h3>
                <ul className="container_list_coments">
                  <li>
                    <div className="header-coment">
                      <img id="user" src={user1} alt="" />
                      <span className="body-2-500">Camila Silva</span>
                      <img src={ellipse} alt="" />
                      <span className="past_time">há 3 dias</span>
                    </div>

                    <p className="body-2-400">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </li>
                  <li>
                    <div className="header-coment">
                      <img src={user} alt="" />
                      <span className="body-2-500">Samuel Leão</span>
                      <img src={ellipse} alt="" />
                      <span className="past_time">há 3 dias</span>
                    </div>
                    <p className="body-2-400">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </li>
                  <li>
                    <div className="header-coment">
                      <img src={user2} alt="" />
                      <span className="body-2-500">Júlia Lima</span>
                      <img src={ellipse} alt="" />
                      <span className="past_time">há 3 dias</span>
                    </div>

                    <p className="body-2-400">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="coment-area">
                <div className="user-coment-header">
                  <img src={user} alt="" />
                  <span className="body-2-500">Samuel Leão</span>
                </div>

                <div>
                  <form action="">
                    <div className="submit_comment">
                      <textarea
                        className="input-placeholder"
                        placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                      />
                      <button className="brand1-btn" id="comment" type="submit">
                        Comentar
                      </button>
                    </div>
                    <div className="fast_comments">
                      <div>

                        <button>Gostei muito</button>
                        <button>Incrível</button>
                      </div>
            
                      <button>Recomendarei para meus amigos</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          
          </div>
        </div>
        <Footer />
      </ProductDetailStyle>
   
    </>
  );
};
