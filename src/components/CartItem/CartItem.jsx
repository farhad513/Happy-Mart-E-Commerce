import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";
const CartItem = () => {
  const { getTotalCartAmount, all_product, cartItems, addToCart, removeCart } =
    useContext(ShopContext);
  return (
    <div className="cart_items">
      <div className="cart_items_main_formet">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product?.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div>
              <div className="cart_items_formet cart_items_main_formet">
                <img
                  src={item.image}
                  className="carticon_product_icon"
                  alt=""
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className="cart_item_quantity">
                  {cartItems[item.id]}
                </button>
                <p> ${item.new_price * cartItems[item.id]}</p>
                <img
                  src={remove_icon}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    removeCart(item.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart_items_down">
        <div className="cart_items_total">
          <h2>Total Carts</h2>
          <div>
            <div className="cart_items_total_item">
              <p>Subtotal : </p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_items_total_item">
              <p>Shopping Fee : </p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart_items_total_item">
              <p>Total : </p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCESSED TO CHECKOUT</button>
        </div>
        <div className="cart_items_promocode">
          <p>If you have a promocode</p>
          <div className="cart_items_promoBox">
            <input type="text" placeholder="Please enter your promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
