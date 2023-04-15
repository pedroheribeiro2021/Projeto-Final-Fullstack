import logo from "../../assets/Logo.svg";
import { Menu } from "../Menu Mobile";
import { HeaderStyle } from "./style";

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="header_button">
          <button id="login">Fazer login</button>
          <button id="register">Cadastrar</button>
          <Menu />
        </div>
      </HeaderStyle>
    </>
  );
};
