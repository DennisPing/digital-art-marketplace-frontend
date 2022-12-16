import { useSelector, useDispatch } from "react-redux";
import { createPurchaseThunk } from "../services/purchases/purchase-thunk";

const totalPrice = ({ cart }) => {
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  return totalPrice.toFixed(2);
};

const CheckoutComponent = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  const purchase = {
    userId: user._id,
    date: new Date(),
    totalPrice: totalPrice({ cart }),
    products: cart,
  };

  const dispatch = useDispatch();
  const purchaseHandler = () => {
    if (cart.length > 0) {
      dispatch(createPurchaseThunk(purchase));
    }
  };
  return (
    <div className="row">
      <div className="col-10 col-sm-10 col-md-8 col-lg-4 col-xl-4 mx-auto border rounded-4">
        <div className="d-flex flex-column justify-content-center align-items-center py-4">
          <h1 className="fw-bold">Checkout</h1>
          <h6 className="text-center text-secondary m-0">Please confirm your information</h6>
        </div>

        <div className="form-floating">
          <input
            type="text"
            readOnly
            className="form-control form-control-plaintext"
            id="usernameField"
            placeholder="Username"
            defaultValue={user.username}
            maxLength={64}
          />
          <label htmlFor="usernameField">Username</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            readOnly
            className="form-control form-control-plaintext"
            id="firstNameField"
            placeholder="First Name"
            defaultValue={user.firstName}
            maxLength={64}
          />
          <label htmlFor="firstNameField">First Name</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            readOnly
            className="form-control form-control-plaintext"
            id="lastNameField"
            placeholder="Last Name"
            defaultValue={user.lastName}
            maxLength={64}
          />
          <label htmlFor="lastNameField">Last Name</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="email"
            readOnly
            className="form-control form-control-plaintext"
            id="emailField"
            placeholder="Email Address"
            defaultValue={user.email}
            maxLength={64}
          />
          <label htmlFor="emailField">Email Address</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            readOnly
            className="form-control form-control-plaintext"
            id="phoneField"
            placeholder="Phone Number"
            defaultValue={user.phone}
            maxLength={64}
          />
          <label htmlFor="phoneField">Phone Number</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            readOnly
            className="form-control form-control-plaintext"
            id="ccField"
            placeholder="Phone Number"
            defaultValue="&#128179;  *********1234"
            maxLength={64}
          />
          <label htmlFor="ccField">Payment Method</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            readOnly
            className="form-control form-control-plaintext"
            id="expirationField"
            placeholder="Expiration"
            defaultValue="3/27"
            maxLength={64}
          />
          <label htmlFor="expirationField">Expiration Date</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            readOnly
            className="form-control form-control-plaintext fw-bold"
            id="totalPriceField"
            placeholder="Total Price"
            defaultValue={`$ ${totalPrice({ cart })}`}
            maxLength={64}
          />
          <label htmlFor="totalPriceField">Total Price</label>
        </div>
        <div className="wd-register-btn py-4">
          <button className="btn btn-primary btn-lg rounded-pill" onClick={purchaseHandler}>
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );

  // <div>
  //   <h1>Checkout</h1>
  //   <h5>Payment Method</h5>
  //   <div>
  //     <p> &#128179; *********0000</p>
  //     <p>Exp: 3/27</p>
  //     <p>user name on card</p>
  //   </div>
  //   <h5>Order Summary</h5>
  //   user's items
  //   <p></p>
  //   <button className={"btn btn-primary btn-lg"}>Submit Order</button>
  // </div>
};

export default CheckoutComponent;
