import React, { useState, useEffect } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServiceType from "./compo/ServiceType";

export default function Addservice() {
  //Get Category
  const [id, setId] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const handlecategoryid = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    axios
      .get(api + "admin/getCategoryForSubCategory", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setCategoryData(res.data.category);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Get Sub-Category
  const [subCategoryData, setSubCategoryData] = useState([]);

  function handleSubCat() {
    axios
      .get(api + `admin/getSubCategoryForService/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setSubCategoryData(res.data.subCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    handleSubCat();
  }, [id]);

  //Add Service

  const notify = (servicename) =>
    toast(servicename + " service added Succesfully");

  const [obj, setObj] = useState({
    subCategoryId: "",
    name: "",
    description: "",
    silver: {
      description: "",
      price: "",
    },
    gold: {
      description: "",
      price: "",
    },
    platinum: {
      description: "",
      price: "",
    },
  });

  const handleSubCategoryId = (e) => {
    setObj({ ...obj, subCategoryId: e.target.value });
  };
  const handleServiceName = (e) => {
    setObj({ ...obj, name: e.target.value });
  };
  const handleServiceDesp = (e) => {
    setObj({ ...obj, description: e.target.value });
  };
  const handleSilverDesp = (e) => {
    setObj({ ...obj, silver: { ...obj.silver, description: e.target.value } });
  };
  const handleSilverPrice = (e) => {
    setObj({ ...obj, silver: { ...obj.silver, price: e.target.value } });
  };
  const handleGoldDesp = (e) => {
    setObj({ ...obj, gold: { ...obj.gold, description: e.target.value } });
  };
  const handleGoldPrice = (e) => {
    setObj({ ...obj, gold: { ...obj.gold, price: e.target.value } });
  };
  const handlePlatinumDesp = (e) => {
    setObj({
      ...obj,
      platinum: { ...obj.platinum, description: e.target.value },
    });
  };
  const handlePlatinumPrice = (e) => {
    setObj({ ...obj, platinum: { ...obj.platinum, price: e.target.value } });
  };

  const handleAddService2 = async (e) => {
    axios
      .post(api + "admin/addServiceToSubCategory", obj, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((value) => {
        notify(value.data.service.name);
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
            Dashboard/Sub-Categories/Sub-Category 1/<span>Add Services</span>
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
              {categoryData.map((item) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>

            <label for="Cname" className="Cname">
              Sub-Category 1
            </label>
            <select
              className="selectcategory"
              onChange={handleSubCategoryId}
              id="selectitem"
            >
              <option disabled selected>
                Select Sub-Category
              </option>
              {subCategoryData.map((item) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>

            <label for="Cname" className="Cname">
              Service Name
            </label>
            <input
              type="text"
              id="Cname"
              name="fav_language"
              className="Cinput"
              onChange={handleServiceName}
            />
            <label for="Desp" className="Cname">
              Service Description
            </label>
            <input
              type="text"
              id="Desp"
              name="fav_language"
              className="Cinput"
              onChange={handleServiceDesp}
            />
            <label for="Cimage" className="Cimage">
              Service Image
            </label>
            <input
              type="file"
              id="Cimage"
              name="fav_language"
              className="Cinput"
            />
            <ServiceType
              name={"Silver Service"}
              color={"#989DA0"}
              price={handleSilverPrice}
              desp={handleSilverDesp}
            />
            <ServiceType
              name={"Gold Service"}
              color={"#AC9B4B"}
              price={handleGoldPrice}
              desp={handleGoldDesp}
            />
            <ServiceType
              name={"Platinum Service"}
              color={"#4E637B"}
              price={handlePlatinumPrice}
              desp={handlePlatinumDesp}
            />

            <button className="savebtn" onClick={handleAddService2}>
              Save
            </button>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
