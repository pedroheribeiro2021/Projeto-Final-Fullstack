import { useEffect } from "react"
import { useContextFunction } from "../../contexts/homeContexts"
import { Cards } from "../Cards"
import { Filter } from "../Filter Mobile"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { HomeStyle } from "./style"



export const Home = ()=>{
    const {setOpenFilter,getAllAnnoucements}=useContextFunction()

    useEffect( ()=>{
        (async()=>{

            await getAllAnnoucements()
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
 
    const carBrands = [
        "Toyota",
        "Honda",
        "Ford",
        "Chevrolet",
        "Volkswagen",
        "Nissan",
        "BMW",
        "Mercedes-Benz",
        "Audi",
        "Ferrari",
        "Lamborghini",
        "Porsche",
        "Tesla"
      ];
      

      const carModels = [
        "Toyota Corolla",
        "Honda Civic",
        "Ford Mustang",
        "Chevrolet Camaro",
        "Volkswagen Golf",
        "Nissan Altima",
        "BMW 3 Series",
        "Mercedes-Benz C-Class",
        "Audi A4",
        "Ferrari 488",
        "Lamborghini Aventador",
        "Porsche 911",
        "Tesla Model S"
      ];


      const carColors = [
        "Preto",
        "Branco",
        "Prata",
        "Cinza",
        "Azul",
        "Verde",
        "Vermelho",
        "Amarelo",
        "Laranja",
        "Roxo"
      ];

      const carYears = [
        "1990",
        "1995",
        "2000",
        "2005",
        "2010",
        "2015",
        "2020",
        "2021",
        "2022"
      ];

      const fuelTypes = [
        "Gasolina",
        "Diesel",
        "Etanol",
        "Elétrico",
        "Flex"
      ];
    return(
        <>
            <Header/>
            <HomeStyle >
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
                            {carBrands.map((brand) => (
                                    <li>{brand}</li>
                                ))}

                            </ul>
                        </div>

                        <div className="home_model">
                            <h2>Modelo</h2>
                            <ul className="list_model">
                                {carModels.map((model) => (
                                    <li>{model}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="home_color">
                            <h2>Cor</h2>
                            <ul className="list_color">
                            {carColors.map((color) => (
                                    <li>{color}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="home_year">
                            <h2>Ano</h2>
                            <ul className="list_year">
                                {carYears.map((year) => (
                                    <li>{year}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="home_fuel">
                            <h2>Combustível</h2>
                            <ul className="list_fuel">
                                {fuelTypes.map((fuel) => (
                                    <li>{fuel}</li>
                                ))}
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
                        <Cards />
                    </div>
                </div>
                <div className="filter_mobile">
                    <button onClick={()=>setOpenFilter(true)} id="filter">Filtros</button>
                </div>
                <div className="next_page">
                    <p>1 de 2</p>
                    <button> Seguinte  </button>
                </div>
                <Filter />
                <Footer/>
            </HomeStyle>
        </>
    )
}