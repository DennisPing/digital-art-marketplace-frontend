import "./index.css";
import Total from "./sections/total-price/total";
import CartItem from "./sections/cart-item/cart-item";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Concat the contractAddress and tokenId to create a unique key
const CustomKey = ({ contractAddress, tokenId }) => {
  return `${contractAddress}-${tokenId}`;
};

const CartComponent = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h2>Shopping Cart</h2>
          {cart.map((item) => (
            <CartItem
              key={CustomKey(item)}
              contractAddress={item.contractAddress}
              tokenId={item.tokenId}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="d-flex flex-column align-items-center">
        <Total cart={cart} />
        <Link to="/checkout">
          <button className="btn btn-primary">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartComponent;
