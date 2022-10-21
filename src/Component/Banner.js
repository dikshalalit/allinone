import React, { useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Banner() {
  const [name, setName] = useState("");
  const notify = (name) => toast(name);

  const handleBannerName = (item) => {
    setName(item.target.value);
  };

  const handleAddBaner = () => {
    const inputs = document.querySelectorAll("#Cname, #Cimage");

    inputs.forEach((input) => {
      input.value = "";
    });

    axios
      .post(
        api + "admin/banner",
        {
          name,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        console.log(response.data.message);
        console.log("message");
        notify(response.data.data.name + " " + response.data.message);
      })
      .catch(function (error) {
        notify(error.response.data.message);
      });
  };

  return (
    <div className="categoryalign">
      <div className="sidefix">
        <SideBar />
      </div>
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
              onChange={handleBannerName}
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

            <button className="savebtn" onClick={handleAddBaner}>
              Save
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
