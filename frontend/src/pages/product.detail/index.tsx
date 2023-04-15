import { Header } from "../../components/Header"
import car from "../../assets/car-detail.svg"
import user from "../../assets/user.svg"
import user1 from "../../assets/user1.svg"
import user2 from "../../assets/user2.svg"
import ellipse from "../../assets/Ellipse 3.svg"
import { Footer } from "../../components/Footer"
import {  ProductDetailStyle } from "./style"


export const ProductDetail = () => {
    return(
        <>
            <Header/>
            {/* <FirstBackGround> */}
            <ProductDetailStyle>
                <div className="vehicle-apresentation">
                    <img className="princialp-image" src={car} alt="" />
                    <div className="vehicle-detail">
                        <h3 className="heading-6-600">
                        Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                        </h3>
                        <div>
                            <span>2013</span>
                            <span>0 KM</span>
                            <p className="heading-7-500">R$ 00.000,00</p>
                        </div>
                        <button className="brand1-btn">Comprar</button>
                    </div>
                    <div className="vehicle-description">
                        <h3 className="heading-6-600">
                            Descrição
                        </h3>
                        <p className="body-1-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="coments-space">
                        <h3 className="heading-6-600">
                            Comentários
                        </h3>
                        <ul>
                            <li>
                                <div className="header-coment">
                                    <img src={user1} alt="" />
                                    <span className="body-2-500">
                                        Camila Silva
                                    </span>
                                    <img src={ellipse} alt="" />
                                    <span className="">há 3 dias</span>
                                </div>
                                <p className="body-2-400">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li>
                                <div className="header-coment">
                                    <img src={user} alt="" />
                                    <span className="body-2-500">
                                        Samuel Leão
                                    </span>
                                    <img src={ellipse} alt="" />
                                    <span className="">há 3 dias</span>
                                </div>
                                <p className="body-2-400">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li>
                                <div className="header-coment">
                                    <img src={user2} alt="" />
                                    <span className="body-2-500">
                                        Júlia Lima
                                    </span>
                                    <img src={ellipse} alt="" />
                                    <span className="">há 3 dias</span>
                                </div>
                                <p className="body-2-400">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="coment-area">
                        <div className="user-coment-header">
                            <img src={user} alt="" />
                            <span className="body-2-500">
                                Samuel Leão
                            </span>
                        </div>
                        <div>
                            <form action="">
                                <textarea className="input-placeholder" id="coment" name="coment" placeholder="Carro muito confortável, foi uma ótima experiência de compra..." />
                                <button className="brand1-btn" type="submit">Comentar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <aside>
                    <div className="gallery">
                        <h3 className="heading-6-600">
                            Fotos
                        </h3>
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
                        <p className="body-1-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <button className="grey0-btn">Ver todos os anúncios</button>
                    </div>
                </aside>
            </ProductDetailStyle>
            {/* </FirstBackGround> */}
            <Footer/>
        </>
    )
}