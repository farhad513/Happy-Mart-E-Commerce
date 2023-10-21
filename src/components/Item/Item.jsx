import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <Link
        onClick={window.scrollTo(0, 0)}
        to={`/product/${props.id}`}
        state={{}}
      >
        <p>{props.name}</p>
      </Link>
      <div className="item_prices">
        <div className="item_price_new">${props.new_price}</div>
        <div className="item_price_old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
