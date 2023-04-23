import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Profile } from './pages/profile';
import {Home} from './components/Home';
import {ProductDetail} from './pages/product.detail/index';
import Login from './pages/login/LoginForm';
import RegisterUserPage from './pages/register/RegisterForm';

function App() {
  const isAuthenticated = () => localStorage.getItem('token');

  return (

    <main>

      <Routes>
        <Route path="/login" element={!isAuthenticated() ? <Login/> : <Home/>} />
        <Route  path="/" element={<Home/>}/>
        <Route path='/register' element={isAuthenticated() ? <Home/> : <RegisterUserPage/>}/>
        <Route path="/product-detail" element={ <ProductDetail/>} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>

  </main>
  );
}

export default App;
