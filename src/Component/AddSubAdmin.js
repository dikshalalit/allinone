import React, { useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Modal from "react-modal";

export default function AddSubAdmin() {
  const responsible = [
    "Finance",
    "Top Host",
    "Top Users",
    "Host Requests",
    "Gifts",
    "Banners",
    "Emojis",
    "All Users",
  ];
  return (
    <div className="categoryalign">
      <SideBar />
      <div className="rightobject">
        <Navbar />
        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead2">Sub-Admin</span>
          <div className="path">
            Dashboard/Sub-Admin/<span>Add Sub-Admin</span>
          </div>
          <div className="inputbox">
            <h5 className="subadminhead">Add Sub-Admin</h5>
            <div className="inputfelx">
              <div>
                <label for="username" className="username">
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="fav_language"
                  className="userinput"
                />
              </div>
              <div>
                <label for="userpass" className="userpass">
                  Password
                </label>
                <input
                  type="password"
                  id="userpass"
                  name="fav_language"
                  className="userinput"
                />
              </div>
            </div>
            <h5 className="subadminhead">Responsibilities</h5>
            <div className="row">
              {responsible.map((item) => {
                return (
                  <div className="col-3">
                    <input type="checkbox" className="incheck" />
                    {item}
                  </div>
                );
              })}
            </div>

            <div className="adminbtn">
              <button className="savebtn2">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
