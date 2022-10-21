import React, { useState, useEffect } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SubAddCategory() {
  const [isDisabled, setIsDisabled] = useState(true);

  const [catforsub1, setCatforsub1] = useState([]);
  const [name, setname] = useState("");

  useEffect(() => {
    axios
      .get(api + "admin/getCategoryForSubCategory", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setCatforsub1(res.data.category);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [categoryId, setcategoryId] = useState([]);

  const handleAddSubCatname = (e) => {
    if (e.target.value === "") {
      setIsDisabled(true);
    }
    setIsDisabled(false);
    setname(e.target.value);
  };

  const handlecategoryid = (e) => {
    if (e.target.value === "") {
      setIsDisabled(true);
    }
    setIsDisabled(false);
    setcategoryId(e.target.value);
  };

  const notify = (subcatename, categoryname) =>
    toast(subcatename + " Sub-Sategory added to " + categoryname);

  const handleAddSubCat = async (e) => {
    axios
      .post(
        api + "admin/addSubCategory",
        { name, categoryId },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((value) => {
        console.log(value.data);
        console.log("SJAIDJAISDJASIDJASIDJSAIDJAIDJ");
        setname("");
        notify(value.data.subCategory.name, value.data.category.name);
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
          <span className="addcathead2">Sub-Categories</span>
          <div className="path">
            Dashboard/Sub-Categories/Sub-Category 1/
            <span>Add Sub-Category</span>
          </div>
          <div className="inputbox">
            <label for="Cname" className="Cname">
              Category
            </label>
            <select
              className="selectcategory"
              onChange={handlecategoryid}
              id="selectitem"
            >
              <option disabled selected>
                Select Category
              </option>
              {catforsub1.map((item) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>

            <label for="Cname" className="Cname">
              Add Sub-Category
            </label>
            <input
              type="text"
              id="Cname"
              name="fav_language"
              className="Cinput"
              onChange={handleAddSubCatname}
            />
            <label for="Cimage" className="Cimage">
              Sub-Category Image
            </label>
            <input
              type="file"
              id="Cimage"
              name="fav_language"
              className="Cinput"
            />

            <button
              className="savebtn"
              onClick={handleAddSubCat}
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
