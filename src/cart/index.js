import "./index.css"
import {Link} from "react-router-dom";

const CartComponent = () => {


    return (
    <div>
      <h1>Your Cart</h1>

        <div>Your cart is empty</div>

        <Link to="/checkout">
        <button className={'checkout-button'} >Checkout</button>
        </Link>
    </div>
  );
};

export default CartComponent;
