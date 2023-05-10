import { useContextFunction } from "../../contexts/homeContexts";
import { FilterStyle } from "./style";
import { IoClose } from "react-icons/io5";

export const Filter = () => {
  const { openFilter, setOpenFilter } = useContextFunction();

  return (
    <>
      <FilterStyle openFilter={openFilter}>
        <div className="home_filter_mobile">
          <div className="home_filter_close">
            <p>Filtro</p>
            <button onClick={() => setOpenFilter(false)}>
              <IoClose />
            </button>
          </div>
          <div className="home_brand_mobile">
            <h3>Marca</h3>
            <ul className="list_brand_mobile">
              <li>General Motors</li>
              <li>Fiat</li>
              <li>Ford</li>
              <li>Honda</li>
              <li>Porshe</li>
              <li>Volswagen</li>
            </ul>
          </div>

          <div className="home_model_mobile">
            <h3>Modelo</h3>
            <ul className="list_model_mobile">
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

          <div className="home_color_mobile">
            <h3>Cor</h3>
            <ul className="list_color_mobile">
              <li>Azul</li>
              <li>Branca</li>
              <li>Cinza</li>
              <li>Prata</li>
              <li>Preta</li>
              <li>Verde</li>
            </ul>
          </div>

          <div className="home_year_mobile">
            <h3>Ano</h3>
            <ul className="list_year_mobile">
              <li>2022</li>
              <li>2021</li>
              <li>2018</li>
              <li>2015</li>
              <li>2013</li>
              <li>2012</li>
              <li>2010</li>
            </ul>
          </div>

          <div className="home_fuel_mobile">
            <h3>Combustível</h3>
            <ul className="list_fuel_mobile">
              <li>Diesel</li>
              <li>Etanol</li>
              <li>Gasolina</li>
              <li>Flex</li>
            </ul>
          </div>

          <div className="aditional_filters_mobile">
            <h3>KM</h3>
            <div className="aditional_filters_button_mobile">
              <button>Mínima</button>
              <button>Máxima</button>
            </div>

            <h3>Preço</h3>
            <div className="aditional_filters_button_mobile">
              <button>Mínimo</button>
              <button>Máximo</button>
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
