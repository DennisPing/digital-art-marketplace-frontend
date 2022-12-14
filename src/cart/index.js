import './index.css';
import cartItemArray from "./cart-items.json";
import Total from './sections/total-price/total';
import CartItem from './sections/cart-item/cart-item';
// import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

function CartComponent() {

  // const cart = useSelector((state) => state.cart)

  return (
      <div className="cart">
        <div className="cart__left">
          <div>
            <h2>Shopping Cart</h2>
            {cartItemArray.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                />
            ))}
          </div>
        </div>

        <div className="cart__right">
          <Total/>
          <Link to="/checkout"><button className="checkout-button text-white" >Checkout</button>
          </Link>
        </div>
      </div>
  )
}

export default CartComponent;
