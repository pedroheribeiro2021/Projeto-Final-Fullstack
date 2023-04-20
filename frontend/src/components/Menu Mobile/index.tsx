import { BiMenu } from "react-icons/bi";
import { MenuStyle } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuStyle isOpen={isOpen}>
        <div className="menu_mobile">
          <button className="menu_button" onClick={() => setIsOpen(!isOpen)}>
            <BiMenu />
          </button>
          <div className="menu_items">
            <Link  to="/login"   className="button_items">Fazer login</Link>
            <Link to="/register" className="button_items"> Cadastrar</Link>
          </div>
        </div>
      </MenuStyle>
    </>
  );
};
