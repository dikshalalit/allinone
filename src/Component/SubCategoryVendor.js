import React, { useEffect, useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import Card from "./compo/Card";
import SelectBtn from "./compo/SelectBtn";

export default function SubCategoryVendor() {
  const [catforsub1, setCatforsub1] = useState([]);
  const [subCatForSub2, setSubCatForSub2] = useState([]);
  const [id, setId] = useState("");

  const handleCategoryId = (item) => {
    setId(item.target.value);
  };

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
            Dashboard/Vendor/<span>Sub-Category Vendor</span>
          </div>
          <div className="inputbox vendorbox">
            <div className="d-flex">
              <SelectBtn
                data={catforsub1}
                des={"Choose Category"}
                change={setId}
              />
              <div className="selectLine"></div>
              <SelectBtn data={subCatForSub2} des={"Choose Sub-Category"} />
              <div className="selectLine"></div>
              <SelectBtn des={"Choose Service"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
