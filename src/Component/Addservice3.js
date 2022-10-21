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
  //get Category
  const [categoryData, setCategoryData] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const handleCategoryId = (e) => {
    setCategoryId(e.target.value);
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

  //get Sub-Category
  const [subCategoryId, setSubCategoryId] = useState("");
  const [subCategoryData, setSubCategoryData] = useState([]);
  const handleSubCategoryId = (e) => {
    setSubCategoryId(e.target.value);
  };
  useEffect(() => {
    async function handleSubCat1() {
      axios
        .get(api + `admin/getSubCategoryForSubCategory2/${categoryId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          setSubCategoryData(res.data.subCategory);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    handleSubCat1();
  }, [categoryId]);

  //get Sub-category2
  const [subCategory2Data, setSubCategory2Data] = useState([]);
  useEffect(() => {
    async function handleSubCat2() {
      axios
        .get(
          api +
            `admin/getSubCategory2ForService/${categoryId}/${subCategoryId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          setSubCategory2Data(res.data.subCategory[0].subCategory2);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    handleSubCat2();
  }, [categoryId, subCategoryId]);

  //Add Service

  const notify = (servicename) => toast(servicename + " Added Succesfully");

  const [obj, setObj] = useState({
    subCategory2Id: "",
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

  const handleSubCategory2Id = (e) => {
    setObj({ ...obj, subCategory2Id: e.target.value });
  };
  const handleServiceName = (e) => {
    setObj({ ...obj, name: e.target.value });
  };
  const handleServiceDesp = (e) => {
    setObj({ ...obj, description: e.target.value });
  };
  const handleSilverDesp = (e) => {
    setObj({
      ...obj,
      silver: { ...obj.silver, description: e.target.value },
    });
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

  const handleAddService3 = async (e) => {
    axios
      .post(api + "admin/addServiceToSubCategory2", obj, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((value) => {
        console.log(value.data);
        console.log(value.data.subCategory2.name);
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
            Dashboard/Sub-Categories/Sub-Category 2/<span>Add Services</span>
          </div>
          <div className="inputbox">
            <label for="Cname" className="Cname">
              Category
            </label>
            <select className="selectcategory" onChange={handleCategoryId}>
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
            <select className="selectcategory" onChange={handleSubCategoryId}>
              <option disabled selected>
                Select Sub-Category
              </option>
              {subCategoryData.map((item) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>

            <label for="Cname" className="Cname">
              Sub-Category 2
            </label>
            <select
              className="selectcategory"
              id="selectitem"
              onChange={handleSubCategory2Id}
            >
              <option disabled selected>
                Select Sub-Category 2
              </option>
              {subCategory2Data.map((item) => {
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

            <button className="savebtn" onClick={handleAddService3}>
              Save
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
