import React from "react";

import popular_data from "../../assets/data";
import Item from "../Item/Item";
import "./Popular.css";
const Popluar = () => {
  return (
    <div className="popular">
      <h1>Popular in woman</h1>
      <hr />
      <div className="popular_item">
        {popular_data.map((item, i) => {
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

export default Popluar;
