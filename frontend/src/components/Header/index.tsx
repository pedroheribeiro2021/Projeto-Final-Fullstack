
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { Menu } from "../Menu Mobile";
import { HeaderStyle } from "./style";
import { useState } from "react";


export const Header = () => {
  const [loginHovered, setLoginHovered] = useState(false);
  const [registerHovered, setRegisterHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginNavigate = () => {
    navigate('/login');
  };

  const handleLoginMouse = () => {
    if(loginHovered)setLoginHovered(false);
    else setLoginHovered(true);
  };

  const handleRegisterMouse = () => {
    if(registerHovered)setRegisterHovered(false);
    else setRegisterHovered(true);
  };

  return (
    <>
      <HeaderStyle>

          <div>
            <img src={logo} alt="" />
          </div>
          <div className="header_button">

          <button
          className="login"
          onMouseEnter={handleLoginMouse}
          onMouseLeave={handleLoginMouse}
          id={location.pathname === "/login" ? "active" : ""}
          onClick={handleLoginNavigate}
        >
          Fazer login
        </button>
        <button
          id={location.pathname === "/cadastro" ? "active" : ""}
          onMouseEnter={handleRegisterMouse}
          onMouseLeave={handleRegisterMouse}
          className='register'
        >
          Cadastrar
        </button>
        <Menu/>
          </div>
      
      </HeaderStyle>
    </>
  );
};
