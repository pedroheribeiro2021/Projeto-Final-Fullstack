import  user1  from "../../assets/user2.svg";
import { BiMenu } from "react-icons/bi";
import { MenuStyle } from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { IUser } from "../../types/home/homeInterface";
import { useLogin } from "../../contexts/loginContext";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<IUser>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { setIsEditUserModalOpen, setIsEditAddressModalOpen } =
  useLogin();

  const getUser = async (userId: any) => {
    try {
      const response = await api.get(`/user/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error(error)
    }

  };
  const handleEditUser = () => {
    setIsEditUserModalOpen(true);
  };

  const handleEditAddress = () => {
    setIsEditAddressModalOpen(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      const userId = localStorage.getItem('id');
      getUser(userId);
    }
  }, []);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    setIsAuthenticated(false);
  };

  
  return (
    <>
      <MenuStyle isOpen={isOpen}>
        <div className="menu_mobile">
          <button className="menu_button" onClick={handleMenuClick}>
            <BiMenu />
          </button>
          {isAuthenticated && user ? (
            <div className="menu_items">
              <div className="boxUser user_info">
                <img src={user1} alt={user.name} />
                <span>{user.name}</span>
              </div>
              <Link to="/profile/admin" className="button_items" onClick={handleMenuClick}>
                Meu Perfil
              </Link>
              <button onClick={handleEditUser} className="button_items">Editar usuário</button>
              <button onClick={handleEditAddress} className="button_items">Editar endereço</button>
              <button onClick={handleSignOut} className="button_items">
                Sair
              </button>
              
            </div>
          ) : (
            <div className="menu_items">
              <Link to="/login" className="button_items" onClick={handleMenuClick}>
                Fazer login
              </Link>
              <Link to="/register" className="button_items" onClick={handleMenuClick}>
                Cadastrar
              </Link>
            </div>
          )}
        </div>
      </MenuStyle>
    </>
  );
};