import React from "react";
import "./CSS/LoginSignup.css";
import { Link } from "react-router-dom";
const LoginSignup = () => {
  return (
    <div className="login_signup">
      <div className="container">
        <h1>Sign up</h1>
        <div className="login_fields">
          <input
            type="text"
            name="name"
            id=""
            placeholder="please enter your name"
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="please enter your email"
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="please enter your password"
          />
        </div>
        <button>Continue</button>
        <p className="btn_account">
          Alreay have an account? <Link to={"/login"}>Login</Link>{" "}
        </p>
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use & privacy and policy. </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
