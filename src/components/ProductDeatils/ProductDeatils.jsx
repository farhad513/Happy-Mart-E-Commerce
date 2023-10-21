import React, { useContext } from "react";
import "./ProductDeatils.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
const ProductDeatils = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product_details">
      <div className="product_details_left">
        <div className="product_image_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product_image">
          <img className="product_main_image" src={product.image} alt="" />
        </div>
      </div>
      <div className="product_details_right">
        <h1>{product.name}</h1>
        <div className="product_star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(99)</p>
        </div>
        <div className="product_price">
          <div className="product_old_price">$ {product.old_price}</div>
          <div className="product_new_price">$ {product.new_price}</div>
        </div>
        <div className="product_description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eum
          dicta perspiciatis asperiores iusto enim rerum culpa dolor excepturi
          quis.
        </div>
        <div className="product_size">
          <h2>Select Size</h2>
          <div className="select_size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>Xl</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <div className="product_category">
          <span>Category : </span> <span>Man, Woman, Kids</span>
        </div>
        <div className="product_tags">
          <span>Tag :</span> <span>Modern, Latest</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatils;
