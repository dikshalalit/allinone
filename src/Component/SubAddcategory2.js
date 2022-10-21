import React, { useState, useEffect } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

export default function SubAddcategory2() {
  const [Catforsub2, setCatforsub2] = useState([]);
  const [id, setId] = useState("");
  const [SubCatForSub2, setSubCatForSub2] = useState([]);
  const [name, setName] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState([]);
  const notify = (servicename, subcategoryname) =>
    toast(servicename + " Category added to " + subcategoryname);

  const handlecategoryid = (e) => {
    setId(e.target.value);
  };

  const handlesubcategoryid = (e) => {
    setSubCategoryId(e.target.value);
  };

  const handleAddSubCatName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    axios
      .get(api + "admin/getCategoryForSubCategory", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setCatforsub2(res.data.category);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    async function handleSubCat1() {
      axios
        .get(api + `admin/getSubCategoryForSubCategory2/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          console.log(
            res.data.subCategory.map((item) => {
              console.log(item.name);
            })
          );

          setSubCatForSub2(res.data.subCategory);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    handleSubCat1();
  }, [id]);

  const handleAddSubCat2 = async (e) => {
    const inputs = document.querySelectorAll("#Cname, #Cimage");

    const select = document.querySelectorAll("#selectitem");

    inputs.forEach((input) => {
      input.value = "";
    });

    select.forEach((select) => {
      select.option = "";
    });

    axios
      .post(
        api + "admin/addSubCategory2",
        { name, subCategoryId },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((value) => {
        console.log(value.data);
        notify(value.data.subCategory2.name, value.data.subCategory.name);
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
            Dashboard/Sub-Categories/Sub-Category 2/
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
              {Catforsub2.map((item) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>

            <label for="Cname" className="Cname">
              Sub-Category
            </label>
            <select
              className="selectcategory"
              id="selectitem"
              onChange={handlesubcategoryid}
            >
              <option disabled selected>
                Select Sub-Category 1
              </option>
              {SubCatForSub2.map((item) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>

            <label for="Cname" className="Cname">
              Add Sub-Category 2
            </label>
            <input
              type="text"
              id="Cname"
              name="fav_language"
              className="Cinput"
              onChange={handleAddSubCatName}
            />
            <label for="Cimage" className="Cimage">
              Sub-Category 2 Image
            </label>
            <input
              type="file"
              id="Cimage"
              name="fav_language"
              className="Cinput"
            />

            <button className="savebtn" onClick={handleAddSubCat2}>
              Save
            </button>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
