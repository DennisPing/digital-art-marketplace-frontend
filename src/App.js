import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import HomeComponent from "./home";
import ShopComponent from "./shop";
import ProfileComponent from "./profile";
import CartComponent from "./cart";

function App() {
  return (
    <BrowserRouter>
      <div className="container p-2">
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomeComponent />} />
          <Route path="shop" element={<ShopComponent />} />
          <Route path="profile" element={<ProfileComponent />} />
          <Route path="cart" element={<CartComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
