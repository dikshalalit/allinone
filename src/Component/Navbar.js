import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Style/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="rightside">
      <div className="dnavbar">
        <div>
          <input
            type="searchbar"
            placeholder="Search Here.."
            className="search"
          />
        </div>
        <div>
          <i className="fa-solid fa-bell bell"></i>
          <button className="logoutbtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
