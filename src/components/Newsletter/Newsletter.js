import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive offer on your Email</h1>
      <p>Subscribe to your newsletter and stay updated</p>
      <div className="">
        <input type="email" placeholder="Please enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
