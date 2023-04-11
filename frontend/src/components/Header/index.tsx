import logo from "../../assets/Logo.svg";
import { HeaderStyle } from "./style";
import {BiMenu} from "react-icons/bi"

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="header_button">
          <button>Fazer login</button>
          <button>Cadastrar</button>
        </div>
        <div className="menu_mobile">
          <button className="menu_button">
            <BiMenu/>
          </button>
         
        </div>
      </HeaderStyle>
    </>
  );
};
