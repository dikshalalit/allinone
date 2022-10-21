import React, { useEffect, useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import Card from "./compo/Card";
import SelectBtn from "./compo/SelectBtn";

export default function SubCategory2Vendor() {
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [subCategory2Id, setSubCategory2Id] = useState("");
  const [categoryData, setCategoryData] = useState("");
  const [subCategoryData, setSubCategoryData] = useState("");
  const [subCategory2Data, setSubCategory2Data] = useState("");

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
            Dashboard/Vendor/<span>Sub-Category2 Vendor</span>
          </div>
          <div className="inputbox vendorbox">
            <div className="d-flex">
              <SelectBtn
                des={"Choose Category"}
                data={categoryData}
                change={setCategoryId}
              />
              <div className="selectLine"></div>
              <SelectBtn
                des={"Choose Sub-Category"}
                data={subCategoryData}
                change={setSubCategoryId}
              />
              <div className="selectLine"></div>
              <SelectBtn
                des={"Choose Sub-Catehory2"}
                data={subCategory2Data}
                change={setSubCategory2Id}
              />
              <div className="selectLine"></div>
              <SelectBtn des={"Choose Service"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
