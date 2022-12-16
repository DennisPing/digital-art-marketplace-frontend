import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import HomeComponent from "./home";
import ExploreComponent from "./explore";
import ShopComponent from "./shop";
import ProductComponent from "./product";
import ProfileComponent from "./profile";
import CartComponent from "./cart";
import NavbarComponent from "./navbar";
import CheckoutComponent from "./checkout";

import collectionsReducer from "./reducers/collections-reducer";
import shopReducer from "./reducers/shop-reducer";
import productReducer from "./reducers/product-reducer";
import cartReducer from "./reducers/cart-reducer";
import userReducer from "./reducers/user-reducer";
import reviewReducer from "./reducers/review-reducer";
import LoginComponent from "./login";
import RegisterComponent from "./register";
import DeleteComponent from "./profile/delete";
import ExploreSearchComponent from "./explore-search";

const store = configureStore({
  reducer: {
    collections: collectionsReducer,
    shop: shopReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    review: reviewReducer,
  },
});

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container">
          <NavbarComponent />
          <Routes>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<HomeComponent />} />
            <Route path="explore" element={<ExploreComponent />} />
            <Route path="shop/:encodedName" element={<ShopComponent />} />
            <Route path="product/:contractAddress/:tokenId" element={<ProductComponent />} />
            <Route path="profile" element={<ProfileComponent />} />
            <Route path="cart" element={<CartComponent />} />
            <Route path="checkout" element={<CheckoutComponent />} />
            <Route path="login" element={<LoginComponent />} />
            <Route path="register" element={<RegisterComponent />} />
            <Route path="profile/delete" element={<DeleteComponent />} />
            <Route path="explore-search" element={<ExploreSearchComponent />} />
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
      </Provider>
    </BrowserRouter>
  );
}

export default App;
