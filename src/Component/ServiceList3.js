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
  const [subcategory2Name, setsubCategory2Name] = useState("");
  const [subcategoryId, setsubCategoryId] = useState("");
  const [subCategory2Id, setsubCategory2Id] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const [serviceId, setServiceId] = useState("");

  const handleCategoryID = (e) => {
    setCategoryId(e.target.value.split(" ")[0]);
  };

  const handleSubCategoryId = (e) => {
    setsubCategoryId(e.target.value.split(" ")[0]);
  };

  const handleSubCategory2Id = (e) => {
    setsubCategory2Id(e.target.value.split(" ")[0]);
    setsubCategory2Name(e.target.value.split(" ")[1]);
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

  /////////////////////////////////////////////////////
  const [subCategoryData, setSubCategoryData] = useState([]);

  function handleSubCat1() {
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
  useEffect(() => {
    handleSubCat1();
  }, [categoryId]);

  // ///////////////////////////////////////////////
  const [subCategory2Data, setSubCategory2Data] = useState([]);

  function handleSub2Cat() {
    axios
      .get(
        api + `admin/getSubCategory2ForService/${categoryId}/${subcategoryId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )

      .then((res) => {
        const filteredData = res.data.subCategory[0].subCategory2.filter(
          (val) => {
            if (val.service.length !== 0) {
              return val;
            }
          }
        );
        console.log(filteredData);
        setSubCategory2Data(filteredData);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    handleSub2Cat();
  }, [categoryId, subcategoryId]);

  //////////////////////////////////////

  const handleService = () => {
    axios
      .get(api + `admin/getAllServicesForSubCategories2/${subCategory2Id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setServiceData(res.data.services[0].service);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleService();
  }, [subCategory2Id]);

  /////////////////////////////////////////////////////////

  const handleDelete = () => {
    axios
      .delete(api + "admin/serviceSubCategory2", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: {
          id: serviceId,
          subCategory2Id: subCategory2Id,
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
              Sub-Category 1
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

            <label for="Cname" className="Cname">
              Sub-Category 2
            </label>

            <select
              className="selectcategory"
              id="selectitem"
              onChange={handleSubCategory2Id}
            >
              <option selected disabled>
                Choose Sub-Category
              </option>
              {subCategory2Data.map((item) => {
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
                  catName={subcategory2Name}
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
