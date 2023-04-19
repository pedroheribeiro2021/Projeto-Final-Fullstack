import { BiMenu } from "react-icons/bi";
import { MenuStyle } from "./style";
import { useState } from "react";

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
            <button className="button_items">Fazer login</button>
            <button className="button_items"> Cadastrar</button>
          </div>
        </div>
      </MenuStyle>
    </>
  );
};
