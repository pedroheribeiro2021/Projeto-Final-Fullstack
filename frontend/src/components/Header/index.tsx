import logo from "../../assets/Logo.svg";
import { Menu } from "../Menu Mobile";
import { HeaderStyle } from "./style";

import { Link } from "react-router-dom";


export const Header = () => {


  return (
    <>
      <HeaderStyle>

          <div>
            <img src={logo} alt="" />
          </div>
          <div className="header_button">

          <Link to="/login"
          className="login"
          
        >
          Fazer login
        </Link>
        <Link
          to="/register"
          className="register"
        >
          Cadastrar
        </Link>
        <Menu/>
          </div>
      

      </HeaderStyle>
    </>
  );
};
