import React from "react";
import "../Style/WelcomePage.css";
import MainImage from "../Assests/mainImage.png";
import Logo from "../Assests/logo.png";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div>
      <div className="welcomebox">
        <img src={MainImage} className="mainImage" />

        <div className="maintxt">
          <h1>Welcome Back!</h1>
          <img src={Logo} className="mainlogo" />
          <h5>Choose One Option to Login to Your Account</h5>

          <Link to={"/AdminLogin"}>
            <button className="mainbtn1">SIGN IN AS ADMIN</button>
          </Link>
          <Link to={"/SubAdminLogin"}>
            <button className="mainbtn">SIGN IN AS SUB-ADMIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
