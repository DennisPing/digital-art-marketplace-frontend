import "./cart-item.css";
import { removeItem } from "../../../reducers/cart-reducer.js";
import { useDispatch } from "react-redux";

function CartItem({ contractAddress, tokenId, image, name, price }) {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt="item" />
      <div className="cartItem__info">
        <p className="cartItem__title">{name}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button
          className="cartItem__removeButton"
          onClick={() =>
            dispatch(
              removeItem({
                contractAddress: contractAddress,
                tokenId: tokenId,
              })
            )
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}
export default CartItem;
