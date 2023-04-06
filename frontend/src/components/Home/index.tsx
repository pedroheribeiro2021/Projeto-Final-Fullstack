import { Cards } from "../Cards"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { HomeStyle } from "./style"


export const Home = ()=>{
    return(
        <>
            <Header/>
            <HomeStyle>
                <div className="home_intro">
                    <div className="home_text">
                        <h2> Motors Shop</h2>
                        <p> A melhor plataforma de anúncios de carros do país</p>
                    </div>
                </div>

                <div className="home_container_items">
                    <div className="home_filter">
                        <div className="home_brand">
                            <h2>Marca</h2>
                            <ul className="list_brand">
                                <li>General Motors</li>
                                <li>Fiat</li>
                                <li>Ford</li>
                                <li>Honda</li>
                                <li>Porshe</li>
                                <li>Volswagen</li>
                            </ul>
                        </div>

                        <div className="home_model">
                            <h2>Modelo</h2>
                            <ul className="list_model">
                                <li>Civic</li>
                                <li>Corolla</li>
                                <li>Cruze</li>
                                <li>Fit</li>
                                <li>Gol</li>
                                <li>Ka</li>
                                <li>Onix</li>
                                <li>Porsche 718</li>
                            </ul>
                        </div>
                        
                        <div className="home_color">
                            <h2>Cor</h2>
                            <ul className="list_color">
                                <li>Azul</li>
                                <li>Branca</li>
                                <li>Cinza</li>
                                <li>Prata</li>
                                <li>Preta</li>
                                <li>Verde</li>
                            </ul>
                        </div>

                        <div className="home_year">
                            <h2>Ano</h2>
                            <ul className="list_year">
                                <li>2022</li>
                                <li>2021</li>
                                <li>2018</li>
                                <li>2015</li>
                                <li>2013</li>
                                <li>2012</li>
                                <li>2010</li>
                            </ul>
                        </div>

                        <div className="home_fuel">
                            <h2>Combustível</h2>
                            <ul className="list_fuel">
                                <li>Diesel</li>
                                <li>Etanol</li>
                                <li>Gasolina</li>
                                <li>Flex</li>
                            </ul>
                        </div>

                        <div className="aditional_filters">
                            <h2>KM</h2>
                            <div className="aditional_filters_button">
                                <button>Mínima</button>
                                <button>Máxima</button>
                            </div>

                            <h2>Preço</h2>
                            <div className="aditional_filters_button">
                                <button>Mínimo</button>
                                <button>Máximo</button>
                            </div>
                        </div>

                    </div>
                    <div className="home_cards">
                        <Cards/>
                    </div>
                </div>
                <div className="next_page">
                    <p>1 de 2</p>
                    <button> Seguinte  </button>
                </div>
                <Footer/>
            </HomeStyle>
        </>
    )
}