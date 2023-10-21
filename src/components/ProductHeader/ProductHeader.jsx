import React from "react";
import "./ProductHeader.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";
const ProductHeader = (props) => {
  const { product } = props;
  return (
    <div className="product_header">
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default ProductHeader;
