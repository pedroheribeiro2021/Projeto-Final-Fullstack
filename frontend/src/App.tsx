import { Route, Routes } from 'react-router-dom';
import './App.css';

import {Home} from './components/Home';
import {ProductDetail} from './pages/product.detail/index';
import Login from './pages/login/LoginForm';
import { Profile } from './pages/profile';
import { ProfileAdmin } from './pages/profileAdmin';


function App() {


  return (

    <main>

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route  path="/home" element={<Home/>}/>
        <Route path='/register' element={<h1>REGISTRO</h1>}/>
        <Route path="/product-detail" element={ <ProductDetail/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/admin" element={<ProfileAdmin/>}/>
      </Routes>

  </main>
  );
}

export default App;
