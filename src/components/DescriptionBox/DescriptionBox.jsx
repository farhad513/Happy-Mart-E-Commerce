import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="description_box">
      <div className="description_box_navigator">
        <div className="description_box_nav">Description</div>
        <div className="description_box_nav fade">Review(99)</div>
      </div>
      <div className="description_box_descripiton">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          provident dicta maiores, cupiditate quis neque eos corrupti suscipit
          maxime temporibus nisi in quam praesentium earum quibusdam quos magnam
          laborum nostrum!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
