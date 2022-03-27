import {
  Routes,
  Route,
} from 'react-router-dom';

import './assets/css/common-styles.css';

import HomePage from './pages/home/index';
import BuyPage from './pages/buy/index';
import SellPage from './pages/sell/index';
import WantedProducts from './pages/wanted-products/index';
import SelledProducts from './pages/selled-products/index';
import Cart from './pages/cart/index';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <HomePage />} />
        <Route path="buy/" element={ <BuyPage />} />
        <Route path="sell/" element={ <SellPage />} />
        <Route path="wanted/" element={ <WantedProducts />} />
        <Route path="selled/" element={ <SelledProducts />} />
        <Route path="cart/" element={ <Cart />} />
      </Routes>
    </div>
  );
}

export default App;
