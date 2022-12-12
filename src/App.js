import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import HomeComponent from "./home";
import CollectionComponent from "./collection";
import ShopComponent from "./shop";
import ProductComponent from "./product";
import ProfileComponent from "./profile";
import CartComponent from "./cart";
import NavbarComponent from "./navbar";
import CheckoutComponent from "./checkout";

// Temporary comment to trigger a deploy

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavbarComponent />
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomeComponent />} />
          <Route path="collection" element={<CollectionComponent />} />
          <Route path="shop" element={<ShopComponent />} />
          <Route path="product" element={<ProductComponent />} />
          <Route path="profile" element={<ProfileComponent />} />
          <Route path="cart" element={<CartComponent />} />
          <Route path="checkout" element={<CheckoutComponent />} />
        </Routes>

        <div className="d-inline-flex">
          <h6>Screen size debugger:&nbsp;</h6>
          <div className="d-block d-sm-none">
            <h6 className="label label-info">xs</h6>
          </div>
          <div className="d-none d-sm-block d-md-none">
            <h6 className="label label-info">sm</h6>
          </div>
          <div className="d-none d-md-block d-lg-none">
            <h6 className="label label-info">md</h6>
          </div>
          <div className="d-none d-lg-block d-xl-none">
            <h6 className="label label-info">lg</h6>
          </div>
          <div className="d-none d-xl-block d-xxl-none">
            <h6 className="label label-info">xl</h6>
          </div>
          <div className="d-none d-xxl-block">
            <h6 className="label label-info">xxl</h6>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
