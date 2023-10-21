import React, { useContext, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import card_img from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCart } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <Link
          to={"/shop"}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="ECOMMERCE" />
          <h5>Happy Mart</h5>
        </Link>
      </div>
      <ul className="nav_manu">
        <li onClick={() => setMenu("shop")}>
          <Link to={"/shop"} style={{ textDecoration: "none" }}>
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("woman")}>
          <Link to={"/woman"} style={{ textDecoration: "none" }}>
            Womans
          </Link>{" "}
          {menu === "woman" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mans")}>
          <Link to={"/mans"} style={{ textDecoration: "none" }}>
            Mans
          </Link>{" "}
          {menu === "mans" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to={"/kids"} style={{ textDecoration: "none" }}>
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav_login_card">
        <button>
          <Link
            to={"/register"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Register
          </Link>
        </button>
        <Link to={"/cart"} style={{ textDecoration: "none" }}>
          {" "}
          <img src={card_img} width={30} alt="" />
        </Link>
        <div className="nav_cart_count">{getTotalCart()}</div>
      </div>
    </div>
  );
};

export default Navbar;
