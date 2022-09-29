import React, { useEffect, useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";

export default function Pendingservicemen() {
  const [pendingRequest, setPendingRequest] = useState([]);

  axios
    .get(api + "admin/getPending", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      setPendingRequest(res.data.result);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="categoryalign">
      <SideBar />
      <div className="rightobject">
        <Navbar />

        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead">Servicemen</span>
          <div className="path">
            Dashboard/Servicemen/<span>Pending Request</span>
          </div>
          <div className="serviceinputbox">
            <table className="servicelisttable">
              <tr className="rowone">
                <td className="b1">S.no.</td>
                <td>Name</td>
                <td>DOB</td>
                <td>Email</td>
                <td>Mobile Number</td>
                <td>Current Address</td>
                <td>City</td>
                <td>Pin</td>
                <td className="b2">Approval</td>
              </tr>
              {pendingRequest.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.firstName + " " + item.lastName}</td>
                    <td>{item.DOB.split("T")[0]}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.pin}</td>
                    <td className="pending">{item.requestStatus}</td>
                  </tr>
                );
              })}
            </table>

            <div className="pagination servicepagination">
              <div className="showing">Showing 1 to 8 of 8 entries</div>
              <div>
                <button className="prevbtn">Previous</button>
                <button className="pageno">1</button>
                <button className="nxtbtn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
