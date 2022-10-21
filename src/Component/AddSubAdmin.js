import React, { useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddSubAdmin() {
  const responsible = [
    "Categories",
    "Sub-Categories",
    "Booking",
    "Banner",
    "Servicemen",
    "Vendor",
  ];

  const [responsibility, setResponsibility] = useState([]);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const notify = (Message) => toast(Message);

  const handleResponsible = (item) => {
    var responsibility_array = [...responsibility];
    if (item.target.checked) {
      responsibility_array = [...responsibility, item.target.value];
    } else {
      responsibility_array.splice(responsibility.indexOf(item.target.value), 1);
    }
    setResponsibility(responsibility_array);
  };

  const handleUserName = (item) => {
    setUserName(item.target.value);
  };

  const handlePassword = (item) => {
    setUserPassword(item.target.value);
  };

  const handleAddSubAdmin = async (e) => {
    const inputs = document.querySelectorAll("#username, #userpass, #Cbox");

    inputs.forEach((input) => {
      input.value = "";
      input.checked = "";
    });

    axios
      .post(
        api + "admin/subAdmin",
        {
          userId: userName,
          password: userPassword,
          responsibilities: responsibility,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((value) => {
        console.log(value.data);
        notify("Sub-admin Added Succesfully");
      })
      .catch((e) => {
        console.log("error", e.response.data);
        alert(e.response.data.message);
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
                  onChange={handleUserName}
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
                  onChange={handlePassword}
                />
              </div>
            </div>
            <h5 className="subadminhead">Responsibilities</h5>
            <div className="row">
              {responsible.map((item) => {
                return (
                  <div className="col-3">
                    <input
                      id="Cbox"
                      type="checkbox"
                      className="incheck"
                      onClick={(item) => handleResponsible(item)}
                      value={item}
                    />
                    {item}
                  </div>
                );
              })}
            </div>

            <div className="adminbtn">
              <button className="savebtn2" onClick={handleAddSubAdmin}>
                Save
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
