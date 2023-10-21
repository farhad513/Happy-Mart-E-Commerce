import React from "react";
import "./Offer.css";
import image from "../../assets/exclusive_image.png";
const Offer = () => {
  return (
    <div className="offer">
      <div className="offer_left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on best proudcts</p>
        <button>Check Now</button>
      </div>
      <div className="offer_right">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Offer;
