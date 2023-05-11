import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { Menu } from "../Menu Mobile";
import { HeaderStyle, ContainerUser, ContainerMenu } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useLogin } from "../../contexts/loginContext";
import { toast } from "react-toastify";
import defaultUser from "../../assets/user1.png";

export const Header = () => {
  const [loginHovered, setLoginHovered] = useState(false);
  const [registerHovered, setRegisterHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser, setIsEditUserModalOpen, setIsEditAddressModalOpen } =
    useLogin();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    getUser(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoginNavigate = () => {
    navigate("/login");
  };

  const handleRegisterNavigate = () => {
    navigate("/register");
  };

  const handleLoginMouse = () => {
    if (loginHovered) setLoginHovered(false);
    else setLoginHovered(true);
  };

  const handleRegisterMouse = () => {
    if (registerHovered) setRegisterHovered(false);
    else setRegisterHovered(true);
  };

  const getUser = async (userId: any) => {
    const response = await api.get(`/user/${userId}`);
    setUser(response.data);
  };

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEditUser = () => {
    setIsEditUserModalOpen(true);
  };

  const handleEditAddress = () => {
    setIsEditAddressModalOpen(true);
  };

  const logOut = () => {
    setUser(undefined);
    localStorage.clear();
    navigate("/");
    toast("bye bye!");
  };

  return (
    <>
      <HeaderStyle>
        <div>
          <img
            className="logo"
            src={logo}
            alt="logo marca"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="header_button">
          {user ? (
            <ContainerUser onClick={handleMenuOpen} className="user-info">
              <img id="profileImg" src={defaultUser} alt="Foto do usuário" />
              <span id="user_name">{user.name}</span>
              {menuOpen && (
                <ContainerMenu>
                  <button
                    onClick={() =>
                      user.is_advertiser
                        ? navigate("/profile/admin")
                        : navigate("/profile")
                    }
                  >
                    Meu perfil
                  </button>
                  <button onClick={handleEditUser}>Editar usuário</button>
                  <button onClick={handleEditAddress}>Editar endereço</button>
                  <button onClick={logOut}>Sair</button>
                </ContainerMenu>
              )}
            </ContainerUser>
          ) : (
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
                id={location.pathname === "/register" ? "active" : ""}
                onMouseEnter={handleRegisterMouse}
                onMouseLeave={handleRegisterMouse}
                className="register"
                onClick={handleRegisterNavigate}
              >
                Cadastrar
              </button>
              <Menu />
            </div>
          )}
          <Menu />
        </div>
      </HeaderStyle>
    </>
  );
};
