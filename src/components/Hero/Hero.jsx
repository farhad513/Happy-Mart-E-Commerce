import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_img from "../../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARIVALS ONLY</h2>
        <div>
          <div className="hand_icon">
            <h2>New</h2>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collection</p>
          <p>for everybody</p>
        </div>
        <div className="hero_latest_btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" width={400} />
      </div>
    </div>
  );
};

export default Hero;
