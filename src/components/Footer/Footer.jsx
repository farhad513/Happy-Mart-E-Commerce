import React from "react";
import "./Footer.css";
import logo from "../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pinterest_icon from "../../assets/pintester_icon.png";
import whatsup_icon from "../../assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_logo">
          <img src={logo} alt="" />
          <p>Happy Mart</p>
        </div>
        <ul className="footer_links">
          <li>Products</li>
          <li>Company</li>
          <li>Offers</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="social_links">
          <div className="footer_icon_container">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer_icon_container">
            <img src={pinterest_icon} alt="" />
          </div>
          <div className="footer_icon_container">
            <img src={whatsup_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <hr />
        <p>Copyright &copy; 2023</p>
      </div>
    </div>
  );
};

export default Footer;
