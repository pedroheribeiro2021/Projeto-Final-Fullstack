import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Profile } from './pages/profile';
import {Home} from './components/Home';
import {ProductDetail} from './pages/product.detail/index';
import Login from './pages/login/LoginForm';
import { ProfileAdmin } from './pages/profileAdmin';


import RegisterUserPage from './pages/register/RegisterForm';
import ReactModal from 'react-modal';
import { ChangePassowrdPage } from './pages/changePassword';


function App() {
  const isAuthenticated = () => localStorage.getItem('token');
  ReactModal.setAppElement("#root");
  const resetToken = localStorage.getItem('@resetToken')

  return (
    <main>
      <Routes>
        <Route path="/login" element={!isAuthenticated() ? <Login/> : <Home/>} />
        <Route path={`/resetPassword/${resetToken}`} element={ <ChangePassowrdPage/> } />
        <Route  path="/" element={<Home/>}/>
        <Route path='/register' element={isAuthenticated() ? <Home/> : <RegisterUserPage/>}/>
        <Route path="/product-detail" element={ <ProductDetail/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/admin" element={<ProfileAdmin/>}/>
      </Routes>

  </main>
  );
}

export default App;
