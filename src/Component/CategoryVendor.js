import React, { useEffect, useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import Card from "./compo/Card";
import SelectBtn from "./compo/SelectBtn";
export default function CategoryVendor() {
  const [categoryname, setCategoryname] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [serviceName, setServiceName] = useState([]);

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

  useEffect(() => {
    async function handleService() {
      axios
        .get(api + `admin/getAllCategories/${categoryId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          setServiceName(res.data.category[0].service);
          console.log(res.data.category[0].service);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    handleService();
  }, [categoryId]);

  return (
    <div className="categoryalign">
      <div className="sidefix">
        <SideBar />
      </div>
      <div className="rightobject">
        <Navbar />
        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcadivead"></i>
          <span className="addcathead2">Categories</span>
          <div className="path">
            Dashboard/Vendor/<span>Category Vendor</span>
          </div>
          <div className="inputbox vendorbox">
            <div className="d-flex">
              <SelectBtn
                data={categoryname}
                change={setCategoryId}
                des={"Choose Category"}
              />
              <div className="selectLine"></div>
              <SelectBtn data={serviceName} des={"Choose Service"} />
            </div>

            {/* <div className="row">
              {APIDATA.map((val) => {
                return <Card value={val} />;
              })}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
