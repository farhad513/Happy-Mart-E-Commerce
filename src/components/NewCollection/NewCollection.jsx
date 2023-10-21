import React from "react";
import "./NewCollection.css";
import new_collection from "../../assets/new_collections";
import Item from "../Item/Item";
const NewCollection = () => {
  return (
    <div className="new_collection">
      <h2>NEW COLLECTION</h2>
      <br />

      <div className="collection">
        {new_collection.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default NewCollection;
