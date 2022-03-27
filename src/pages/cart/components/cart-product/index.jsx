import './style.css';
import randomImage from './../../../../assets/img/S3/products/3333.jpg';
import { Trash } from 'react-bootstrap-icons';

const CartProduct = props => {
  return (
    <>
      <div className="cart-products-wrap">

        <div className="cart-product">
          <div className="cart-product-info">
            <div className="image-wrap">
              <img src={randomImage} alt="product" />
            </div>
            <div className="text-info">
              <p>Nike AirMax</p>
              <small>O ultimo lancamento da Nike</small>
            </div>
          </div>
        </div>
        <div className="cart-product">
          <div className="cart-product-info">
            <div className="image-wrap">
              <img src={randomImage} alt="product" />
            </div>
            <div className="text-info">
              <p>Nike AirMax</p>
              <small>O ultimo lancamento da Nike</small>
            </div>
          </div>
        </div>
        <div className="cart-product">
          <div className="cart-product-info">
            <div className="image-wrap">
              <img src={randomImage} alt="product" />
            </div>
            <div className="text-info">
              <p>Nike AirMax</p>
              <small>O ultimo lancamento da Nike</small>
            </div>
          </div>
        </div>
        
        <div className="cart-product">
          <div className="cart-product-info">
            <div className="image-wrap">
              <img src={randomImage} alt="product" />
            </div>
            <div className="text-info">
              <p>Nike AirMax</p>
              <small>O ultimo lancamento da Nike</small>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default CartProduct
