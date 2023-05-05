import { useContext, useEffect } from "react";
import { useContextFunction } from "../../contexts/homeContexts";
import { Cards } from "../Cards";
import { Filter } from "../Filter Mobile";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HomeStyle } from "./style";
import { HomeFilterContext } from "../../contexts/homeFilterContext";
import { ModalEditProfile } from "../ModalEditProfile";
import { ModalEditAddress } from "../ModalEditAddress";

export const Home = () => {
  localStorage.removeItem('announcement_id')
  const { setOpenFilter, getAllAnnoucements } = useContextFunction();
  const {
    getAnnoucements,
    getAllBrands,
    getAllModels,
    getAllYears,
    getAllFuels,
    getColors,
    filterBrand,
    filterModel,
    filterColor,
    filterYear,
    filterFuel,
    brands,
    filteredBrands,
    models,
    filteredModels,
    years,
    filteredYears,
    fuels,
    filteredFuels,
    colors,
    filteredColors,
  } = useContext(HomeFilterContext);

  useEffect(() => {
    (async () => {
      await getAllAnnoucements();
      await getAnnoucements();
      await getAllBrands();
      await getAllModels();
      await getAllYears();
      await getAllFuels();
      await getColors();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <HomeStyle>
      <ModalEditProfile/>
      <ModalEditAddress/>
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
                {filteredBrands.length === 0
                  ? brands.map((brand, i) => (
                      <li key={i} onClick={() => filterBrand(brand.brand)}>
                        {brand.brand}
                      </li>
                    ))
                  : filteredBrands.map((brand, i) => (
                      <li key={i} onClick={() => filterBrand(brand)}>
                        {brand}
                      </li>
                    ))}
              </ul>
            </div>

            <div className="home_model">
              <h2>Modelo</h2>
              <ul className="list_model">
                {filteredModels.length === 0
                  ? models.map((model, i) => (
                      <li key={i} onClick={() => filterModel(model.model)}>
                        {model.model}
                      </li>
                    ))
                  : filteredModels.map((model, i) => (
                      <li key={i} onClick={() => filterModel(model)}>
                        {model}
                      </li>
                    ))}
              </ul>
            </div>

            <div className="home_color">
              <h2>Cor</h2>
              <ul className="list_color">
                {filteredColors.length === 0
                  ? colors.map((color, i) => (
                      <li key={i} onClick={() => filterColor(color)}>
                        {color}
                      </li>
                    ))
                  : filteredColors.map((color, i) => (
                      <li key={i} onClick={() => filterColor(color)}>
                        {color}
                      </li>
                    ))}
              </ul>
            </div>

            <div className="home_year">
              <h2>Ano</h2>
              <ul className="list_year">
                {filteredYears.length === 0
                  ? years.map((year, i) => (
                      <li key={i} onClick={() => filterYear(year.year)}>
                        {year.year}
                      </li>
                    ))
                  : filteredYears.map((year, i) => (
                      <li key={i} onClick={() => filterYear(year)}>
                        {year}
                      </li>
                    ))}
              </ul>
            </div>

            <div className="home_fuel">
              <h2>Combustível</h2>
              <ul className="list_fuel">
                {filteredFuels.length === 0
                  ? fuels.map((fuel, i) => (
                      <li key={i} onClick={() => filterFuel(fuel.fuel)}>
                        {fuel.fuel}
                      </li>
                    ))
                  : filteredFuels.map((fuel, i) => (
                      <li key={i} onClick={() => filterFuel(fuel)}>
                        {fuel}
                      </li>
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
          <button onClick={() => setOpenFilter(true)} id="filter">
            Filtros
          </button>
        </div>
        <div className="next_page">
          <p>1 de 2</p>
          <button> Seguinte </button>
        </div>
        <Filter />
        <Footer />
      </HomeStyle>
    </>
  );
};