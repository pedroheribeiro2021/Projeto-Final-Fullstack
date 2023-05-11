/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useContextFunction } from "../../contexts/homeContexts";
import { Cards } from "../Cards";
import { Filter } from "../Filter Mobile";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ButtonCleanFilter, HomeStyle, InputFilter } from "./style";
import { HomeFilterContext } from "../../contexts/homeFilterContext";
import { ModalEditProfile } from "../ModalEditProfile";
import { ModalEditAddress } from "../ModalEditAddress";
import ReactPaginate from "react-paginate";

export const Home = () => {
  const [km, setKm] = useState(0);

  const handleKmChange = async (event: any) => {
    setKm(event.target.value.split(",").map(Number));
    await filterKM(Number(event.target.value));
  };

  const handlePriceChange = async (event: any) => {
    await filterPrice(Number(event.target.value));
  };

  localStorage.removeItem("announcement_id");
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
    filteredAnnouncements,
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
    filterKM,
    setFilteredBrands,
    setFilteredColors,
    setFilteredFuels,
    setFilteredModels,
    setFilteredYears,
    filterPrice,
    currentPage,
    setCurrentPage,
  } = useContext(HomeFilterContext);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredAnnouncements.length / itemsPerPage);
  
  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

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
  }, []);

  const cleanFilters = async () => {
    setFilteredColors([]);
    setFilteredFuels([]);
    setFilteredYears([]);
    setFilteredModels([]);
    setFilteredBrands([]);
    await getAnnoucements();
  };

  return (
    <>
      <Header />
      <HomeStyle>
        <ModalEditProfile />
        <ModalEditAddress />
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
                <span>KM: {km}</span>
                <InputFilter
                  type="number"
                  placeholder="ex: 1000"
                  onChange={handleKmChange}
                />
              </div>

              <h2>Preço</h2>

              <div className="aditional_filters_button">
                <InputFilter
                  type="number"
                  placeholder="ex: R$1000"
                  onChange={handlePriceChange}
                />
              </div>
              <div>
                {filteredBrands.length ||
                filteredBrands.length ||
                filteredModels.length ||
                filteredYears.length ||
                filteredFuels.length ||
                filteredColors.length > 0 ? (
                  <ButtonCleanFilter onClick={cleanFilters}>
                    Limpar Filtro
                  </ButtonCleanFilter>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="home_cards">
            {filteredAnnouncements.length === 0 ? (
              <span id="noAnnoucements">Não há anúncios cadastrados</span>
            ) : (
              <Cards />
            )}
          </div>
        </div>
        <div className="filter_mobile">
          <button onClick={() => setOpenFilter(true)} id="filter">
            Filtros
          </button>
        </div>
        <div className="next_page">
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            previousLabel={currentPage === 0?"" : '< Anterior'}
            nextLabel={totalPages ===  currentPage + 1?"" :'Próximo >'}
        />
        </div>
        <Filter />
        <Footer />
      </HomeStyle>
    </>
  );
};
