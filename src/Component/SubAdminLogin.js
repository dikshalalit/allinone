import React, { useState } from "react";
import "../Style/Login.css";
import Logo from "../Assests/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "./config";
export default function SubAdminLogin() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const handleUser = (e) => {
    setUserId(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    console.log({ userId, password });
    axios
      .post(api + "admin/subAdmin/login", {
        userId,
        password,
      })
      .then((value) => {
        console.log(value.data.responsibility);
        const respLocal = JSON.stringify(value.data.responsibility);
        localStorage.setItem("token", value.data.token);
        localStorage.setItem("responsibility", respLocal);
        navigate("/Dashboard");
      })
      .catch((e) => {
        console.log("error", e.response.data);
        alert(e.response.data.message);
      });
  };
  return (
    <div className="loginbg">
      <div className="loginbox">
        <div className="wlcmbox">
          <img src={Logo} className="logoimglogin" alt="logoimg" />
          <div className="welcometxt">
            All In One <br />
            Welcome Back
          </div>
        </div>
        <div className="inputLoginbox">
          <input
            type="text"
            id="name"
            name="name"
            className="Linput"
            placeholder="Enter your UserName"
            onChange={handleUser}
          />
          <input
            type="password"
            id="password"
            name="password"
            className="Linput"
            placeholder="Enter your Password"
            onChange={handlePassword}
          />

          <button className="loginsubmit" onClick={handleLogin}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
