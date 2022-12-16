import "./total.css";

function Total({ cart }) {
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    totalPrice = totalPrice.toFixed(2);
    return { totalPrice, totalQuantity };
  };

  return (
    <div className="total">
      <h2>Order Summary</h2>
      <div>
        <p className="total__p">
          total ({getTotal().totalQuantity} items) : <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  );
}

export default Total;
