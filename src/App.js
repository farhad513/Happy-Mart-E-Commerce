import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer/Footer";
import mans_banner from "./assets/banner_mens.png";
import woman_banner from "./assets/banner_women.png";
import kids_banner from "./assets/banner_kids.png";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/mans"
          element={<ShopCategory banner={mans_banner} category="men" />}
        />
        <Route
          path="/woman"
          element={<ShopCategory banner={woman_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kids_banner} category="kid" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
