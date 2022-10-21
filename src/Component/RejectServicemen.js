import React, { useEffect, useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import Card from "./compo/Card";

export default function Rejectservicemen() {
  const [rejectRequest, setRejectRequest] = useState([]);

  axios
    .get(api + "admin/getRejected", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      setRejectRequest(res.data.result);
    })
    .catch((error) => {
      console.log(error);
    });

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
            Dashboard/Servicemen/<span>Reject Request</span>
          </div>
          <div className="inputbox vendorbox">
            <div className="row">
              <Card data={rejectRequest} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
