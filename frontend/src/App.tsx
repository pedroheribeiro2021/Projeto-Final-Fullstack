import { Route, Routes } from 'react-router-dom';
import './App.css';

import {Home} from './components/Home';
import {ProductDetail} from './pages/product.detail/index';
import Login from './pages/login/LoginForm';
import RegisterUserPage from './pages/register/RegisterForm';


function App() {


  return (

    <main>

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route  path="/home" element={<Home/>}/>
        <Route path='/register' element={<RegisterUserPage/>}/>
        <Route path="/product-detail" element={ <ProductDetail/>} />
      </Routes>

  </main>
  );
}

export default App;
