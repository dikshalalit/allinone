import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import { api } from "./config";

export default function CompletedBooking() {
  const [completedData, setCompletedData] = useState([]);

  const handleComplete = () => {
    axios
      .get(api + "admin/bookingCompleted", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res);
        setCompletedData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleComplete();
  }, []);

  return (
    <div className="categoryalign">
      <div className="sidefix">
        <SideBar />
      </div>
      <div className="rightobject">
        <Navbar />

        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead2">Booking</span>
          <div className="path">
            Dashboard/Booking/<span>Completed Booking</span>
          </div>
          <div className="inputbox2">
            <table className="listtable">
              <tr className="rowone">
                <td className="b1">S.no.</td>
                <td>Booking Id</td>
                <td>Date</td>
                <td>Service Name</td>
                <td>Time Slot</td>
                <td>Price</td>
                <td className="b2">Status</td>
              </tr>
              {completedData.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item._id}</td>
                    <td>{item.date}</td>
                    <td>{item.servicePrice.service.name}</td>
                    <td>{item.timeSlot.start + " - " + item.timeSlot.end}</td>
                    <td>{item.servicePrice.price}</td>
                    <td>{item.status}</td>
                  </tr>
                );
              })}
            </table>

            <div className="pagination">
              <div className="d-flex align-items-center">
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
