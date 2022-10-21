import React, { useEffect, useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServiceType from "./compo/ServiceType";

export default function Addservice() {
  useEffect(() => {
    axios
      .get(api + "admin/getCategoryForService", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setCategoryname(res.data.category);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [categoryname, setCategoryname] = useState([]);
  const [obj, setObj] = useState({
    categoryId: "",
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
  const handlecategoryid = (e) => {
    setObj({ ...obj, categoryId: e.target.value });
  };

  const handleservicename = (e) => {
    setObj({ ...obj, name: e.target.value });
  };

  const handleserviceDesp = (e) => {
    setObj({ ...obj, description: e.target.value });
  };

  const handleSilverPrice = (e) => {
    setObj({ ...obj, silver: { ...obj.silver, price: e.target.value } });
  };
  const handleSilverDesp = (e) => {
    setObj({ ...obj, silver: { ...obj.silver, description: e.target.value } });
  };

  const handleGoldPrice = (e) => {
    setObj({ ...obj, gold: { ...obj.gold, price: e.target.value } });
  };
  const handleGoldDesp = (e) => {
    setObj({ ...obj, gold: { ...obj.gold, description: e.target.value } });
  };

  const handlePlatinumPrice = (e) => {
    setObj({ ...obj, platinum: { ...obj.platinum, price: e.target.value } });
  };
  const handlePlatinumDesp = (e) => {
    setObj({
      ...obj,
      platinum: { ...obj.platinum, description: e.target.value },
    });
  };
  const notify = (servicename, categoryname) =>
    toast(servicename + " service added to " + categoryname);

  const handleAddService = async (e) => {
    axios
      .post(api + "admin/addServiceToCategory", obj, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((value) => {
        console.log(value.data);
        notify(value.data.service.name, value.data.category.name);
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
          <span className="addcathead2">Categories</span>
          <div className="path">
            Dashboard/Categories/<span>Add Services</span>
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
              <option selected disabled>
                Choose Category
              </option>
              {categoryname.map((item, index) => {
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
              onChange={handleservicename}
            />

            <label for="Desp" className="Cname">
              Service Description
            </label>
            <input
              type="text"
              id="Desp"
              name="fav_language"
              className="Cinput"
              onChange={handleserviceDesp}
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

            <div className="serviceTypeWidth">
              <ServiceType
                name={"Silver Service"}
                color={"#989DA0"}
                price={handleSilverPrice}
                desp={handleSilverDesp}
                data={""}
              />
              <ServiceType
                name={"Gold Service"}
                color={"#AC9B4B"}
                price={handleGoldPrice}
                desp={handleGoldDesp}
                data={""}
              />
              <ServiceType
                name={"Platinum Service"}
                color={"#4E637B"}
                price={handlePlatinumPrice}
                desp={handlePlatinumDesp}
                data={""}
              />
            </div>
            <button className="savebtn" onClick={handleAddService}>
              Save
            </button>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
