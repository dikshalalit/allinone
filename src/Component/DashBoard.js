import React from "react";
import "../Style/DashBoard.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Chart from "./Chart";
import PieChart2 from "./PieChart2";
import TotalData from "./TotalData";

export default function DashBoard() {
  return (
    <div className="Dashview">
      <div className="sidefix">
        <SideBar />
      </div>
      <div className="rightobject">
        <Navbar />
        <Chart />
        <div className="d-flex justify-content-between">
          <div className="piewidth">
            <PieChart2 />
            <PieChart2 />
          </div>
          <div className="totalwidth">
            <TotalData />
          </div>
        </div>
      </div>
    </div>
  );
}
