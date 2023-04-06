import logo from "../../assets/Logo.svg";
import { HeaderStyle } from "./style";

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
      </HeaderStyle>
    </>
  );
};
