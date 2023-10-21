import React from "react";
import "./CSS/LoginSignup.css";
import { Link } from "react-router-dom";
const LoginSignup = () => {
  return (
    <div className="login_signup">
      <div className="container">
        <h1>Login</h1>
        <div className="login_fields">
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
          Alreay have an account? <Link to={"/register"}>Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
