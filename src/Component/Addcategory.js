import React, { useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddCategory() {
  const [name, setname] = useState("");
  // const [categoryimage, setCategoryimage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const handlecategory = (e) => {
    if (e.target.value === "") {
      setIsDisabled(true);
    }
    setIsDisabled(false);
    setname(e.target.value);
  };

  // const handlecategoryimage = (e) => {
  //   setCategoryimage(e.target.value);
  // };

  const notify = (catName, catMessage) => toast(catName + " " + catMessage);
  const handleAddcategory = async (e) => {
    const inputs = document.querySelectorAll("#Cname, #Cimage");

    inputs.forEach((input) => {
      input.value = "";
    });

    axios
      .post(
        api + "admin/addCategory",
        { name },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((value) => {
        console.log(value.data);
        notify(value.data.category.name, value.data.message);
      })
      .catch((e) => {
        console.log("error", e.response.data);
        alert(e.response.data.message);
      });
  };

  const handleboth = () => {
    handleAddcategory();
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
          <span className="addcathead2">Categories</span>
          <div className="path">
            Dashboard/Categories/<span>Add Category</span>
          </div>
          <div className="inputbox">
            <label for="Cname" className="Cname">
              Category Name
            </label>
            <input
              type="text"
              id="Cname"
              name="fav_language"
              className="Cinput"
              onChange={handlecategory}
            />
            <label for="Cimage" className="Cimage">
              Category Image
            </label>
            <input
              type="file"
              id="Cimage"
              name="fav_language"
              className="Cinput"
            />

            <button
              className="savebtn"
              onClick={handleboth}
              disabled={isDisabled}
            >
              Save
            </button>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
