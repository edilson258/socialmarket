import './style.css';
import NavBar from './../components/bottom-navbar/index';
import Header from './../components/header/index';
import CartProduct from './components/cart-product/index'

const Cart = props => {
  return(
    <>
      <Header />
      <CartProduct />
      <NavBar menuId={4} />
    </>
  );
}

export default Cart;
