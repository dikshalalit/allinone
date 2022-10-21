import React, { useState, useEffect } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import ServiceCard from "./compo/ServiceCard";

export default function ServiceList1() {
  const [categoryData, setCategoryData] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const [serviceId, setServiceId] = useState("");

  const handleCategoryID = (e) => {
    setCategoryId(e.target.value.split(" ")[0]);
    setCategoryName(e.target.value.split(" ")[1]);
  };
  const handleCategory = () => {
    axios
      .get(api + "admin/getCategoryForService", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const filteredData = res.data.category.filter((val) => {
          if (val.service.length !== 0) {
            return val;
          }
        });
        console.log(filteredData);
        setCategoryData(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleCategory();
  }, []);

  const handleService = () => {
    axios
      .get(api + `admin/getAllServicesForCategories/${categoryId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setServiceData(res.data.category[0].service);
        console.log(res.data.category[0].service);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleService();
  }, [categoryId]);

  const handleDelete = () => {
    axios
      .delete(api + "admin/serviceCategory", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: {
          id: serviceId,
          categoryId: categoryId,
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
            Dashboard/Categories/<span>Service List</span>
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
                  catName={categoryName}
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
