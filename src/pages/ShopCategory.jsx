import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import icon from "../assets/dropdown_icon.png";
import Item from "../components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop_category">
      <img className="shop_category_banner" src={props.banner} alt="" />
      <div className="shop_category_index">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shop_category_sort">
          sort by <img src={icon} alt="" />
        </div>
      </div>
      <div className="shop_category_products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                name={item.name}
                image={item.image}
                id={item.id}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop_cateogry-read_more">
        Read More
      </div>
    </div>
  );
};

export default ShopCategory;
