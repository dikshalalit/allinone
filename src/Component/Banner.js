import React from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

export default function Banner() {
  return (
    <div className="categoryalign">
      <SideBar />
      <div className="rightobject">
        <Navbar />
        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead2">Banner</span>
          <div className="path">
            Dashboard/Banner/<span>Add Banner</span>
          </div>
          <div className="inputbox">
            <label for="Cname" className="Cname">
              Banner Name
            </label>
            <input
              type="text"
              id="Cname"
              name="fav_language"
              className="Cinput"
            />
            <label for="Cimage" className="Cimage">
              Banner Image
            </label>
            <input
              type="file"
              id="Cimage"
              name="fav_language"
              className="Cinput"
            />

            <button className="savebtn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
