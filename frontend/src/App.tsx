
import { Route } from 'react-router-dom';
import './App.css';

import { Home } from './components/Home';
import { ProductDetail } from './pages/product.detail';



function App() {
 

  return (
    
    <main>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/product-detail">
        <ProductDetail/>
      </Route>
    </main>
  );
}

export default App;
