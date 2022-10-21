import React, { useState, useEffect } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import ServiceCard from "./compo/ServiceCard";

export default function ServiceList2() {
  const [categoryData, setCategoryData] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryName, setsubCategoryName] = useState("");
  const [subcategoryId, setsubCategoryId] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const [serviceId, setServiceId] = useState("");

  const handleCategoryID = (e) => {
    setCategoryId(e.target.value.split(" ")[0]);
  };

  const handleSubCategoryId = (e) => {
    setsubCategoryId(e.target.value.split(" ")[0]);
    setsubCategoryName(e.target.value.split(" ")[1]);
  };

  //////////////////////////////
  const handleCategory = () => {
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
  };
  useEffect(() => {
    handleCategory();
  }, []);
  ///////////////////////////////////////////////
  const [subCategoryData, setSubCategoryData] = useState([]);

  function handleSubCat() {
    axios
      .get(api + `admin/getSubCategoryForService/${categoryId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })

      .then((res) => {
        const filteredData = res.data.subCategory.filter((val) => {
          if (val.service.length !== 0) {
            return val;
          }
        });
        console.log(filteredData);
        setSubCategoryData(filteredData);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    handleSubCat();
  }, [categoryId]);

  //////////////////////////////////////

  const handleService = () => {
    axios
      .get(api + `admin/getAllServicesForSubCategories/${subcategoryId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setServiceData(res.data.services[0].service);
        console.log("diksha", res.data.services[0].service);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleService();
  }, [subcategoryId]);

  /////////////////////////////////////////////////////////

  const handleDelete = () => {
    axios
      .delete(api + "admin/serviceSubCategory", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: {
          id: serviceId,
          subCategoryId: subcategoryId,
        },
      })
      .then((value) => {
        console.log(value.data);
        handleService();
      })
      .catch((error) => {
        console.log(error);
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
            Dashboard/Sub-Categories/<span>Service List</span>
          </div>
          <div className="inputbox2 servicebox">
            <label for="Cname" className="Cname">
              Category
            </label>

            <select
              className="selectcategory"
              id="selectitem"
              onChange={handleCategoryID}
            >
              <option selected disabled>
                Choose Category
              </option>
              {categoryData.map((item) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>

            <label for="Cname" className="Cname">
              Sub-Category
            </label>

            <select
              className="selectcategory"
              id="selectitem"
              onChange={handleSubCategoryId}
            >
              <option selected disabled>
                Choose Sub-Category
              </option>
              {subCategoryData.map((item) => {
                return (
                  <option value={item._id + " " + item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <div className="row">
              {serviceData.map((val) => (
                <ServiceCard
                  value={val}
                  catName={subcategoryName}
                  service={setServiceId}
                  DeleteFunction={handleDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
