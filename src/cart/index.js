// import "./index.css"
// import {Link} from "react-router-dom";
//
// const CartComponent = () => {
//
//
//     return (
//     <div>
//       <h1>Your Cart</h1>
//
//         <div>Your cart is empty</div>
//
//         <Link to="/checkout">
//         <button className={'checkout-button'} >Checkout</button>
//         </Link>
//     </div>
//   );
// };
//
// export default CartComponent;

import './index.css'
import cartItemArray from "./cartItems.json";
import Total from './total';
import CartItem from './cartItem';
import { useSelector } from 'react-redux'

function CartComponent() {

  const cart = useSelector((state) => state.cart)

  return (
      <div className="cart">
        <div className="cart__left">
          <div>
            <h3>Shopping Cart</h3>
            {cartItemArray.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                />
            ))}
          </div>
        </div>

        <div className="cart__right">
          <Total/>
        </div>

      </div>
  )
}

export default CartComponent;
