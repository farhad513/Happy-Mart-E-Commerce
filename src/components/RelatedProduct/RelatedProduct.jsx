import React from "react";
import "./RelatedProduct.css";
import date_product from "../../assets/data";
import Item from "../Item/Item";
const RelatedProduct = () => {
  return (
    <div className="related_product">
      <h1>Related Product</h1>
      <hr />
      <div className="related_product_item">
        {date_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
