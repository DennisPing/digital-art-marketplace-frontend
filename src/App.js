import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";
import ShopComponent from "./shop";

function App() {
  return (
    <BrowserRouter>
      <div className="container p-2">
        <Routes>
          <Route index element={<HomeComponent />} />
          <Route path="shop" element={<ShopComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
