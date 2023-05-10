import { useContext, useEffect, useState } from "react";
import { useContextFunction } from "../../contexts/homeContexts";
import { HomeFilterContext } from "../../contexts/homeFilterContext";
import { FilterStyle } from "./style";
import { IoClose } from "react-icons/io5";
import { ButtonCleanFilter, InputFilter } from "../Home/style";

export const Filter = () => {
  const { openFilter, setOpenFilter, getAllAnnoucements } =
    useContextFunction();

    const [km, setKm] = useState(0);

    const handleKmChange = async (event:any) => {
      setKm(event.target.value.split(",").map(Number));
      await filterKM(Number(event.target.value));
    };
  
    const handlePriceChange = async(event:any) => {
      await filterPrice(Number(event.target.value));
    };

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
      <FilterStyle openFilter={openFilter}>
        <div className="home_filter_mobile">
        <ButtonCleanFilter onClick={cleanFilters}>Limpar Filtro</ButtonCleanFilter>
          <div className="home_filter_close">
            <p>Filtro</p>
            <button onClick={() => setOpenFilter(false)}>
              <IoClose />
            </button>
          </div>
          <div className="home_brand_mobile">
            <h3>Marca</h3>
            <ul className="list_brand_mobile">
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

          <div className="home_model_mobile">
            <h3>Modelo</h3>
            <ul className="list_model_mobile">
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

          <div className="home_color_mobile">
            <h3>Cor</h3>
            <ul className="list_color_mobile">
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

          <div className="home_year_mobile">
            <h3>Ano</h3>
            <ul className="list_year_mobile">
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

          <div className="home_fuel_mobile">
            <h3>Combustível</h3>
            <ul className="list_fuel_mobile">
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

          <div className="aditional_filters_mobile">
            <h3>KM</h3>
            <div className="aditional_filters_button_mobile">
            <span>KM: {km}</span>
              <InputFilter type="number" placeholder="ex: 1000" onChange={handleKmChange} />
            </div>

            <h3>Preço</h3>
            <div className="aditional_filters_button_mobile">
            <InputFilter type="number" placeholder="ex: R$1000" onChange={handlePriceChange} />
            </div>
          </div>

          <button
            id="ads"
            onClick={() => {
              setOpenFilter(false);
            }}
          >
            Ver anúncios
          </button>
        </div>
      </FilterStyle>
    </>
  );
};
