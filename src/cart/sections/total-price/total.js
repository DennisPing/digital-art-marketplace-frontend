import './total.css';
import cartItemArray from "../../cart-items.json";
// import {useSelector} from 'react-redux';

function Total() {

  // const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cartItemArray.forEach(item => {
      totalQuantity += 1
      totalPrice += item.price
    })
    return {totalPrice, totalQuantity}
  }

  return (
      <div className="total">
        <h2>Order Summary</h2>
        <div>
          <p className="total__p">
            total ({getTotal().totalQuantity} items)
            : <strong>${getTotal().totalPrice}</strong>
          </p>
        </div>
      </div>
  )
}

export default Total;