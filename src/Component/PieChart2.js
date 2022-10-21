import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function PieChart2() {
  const defaultLabelStyle = {
    fontSize: "6px",
    fontFamily: "sans-serif",
    fontWeight: "600",
  };

  return (
    <div className="piebg">
      <div>
        <div className="piehead">Total Earnings</div>
        <PieChart
          label={({ dataEntry }) => dataEntry.value + "%"}
          labelStyle={{
            ...defaultLabelStyle,
            fill: "#ffffff",
          }}
          className="piesize"
          data={[
            {
              title: "Spa/Salon for Women",
              value: 30,
              color: "#52d726",
              width: "100px",
              height: "auto",
            },
            {
              title: "Spa/Salon for Men",
              value: 10,
              color: "#ffec00",
              width: "100px",
              height: "auto",
            },
            {
              title: "Home Appliances",
              value: 20,
              color: "#ff7300",
              width: "100px",
              height: "auto",
            },
            {
              title: "Electricians",
              value: 20,
              color: "#007ed6",
              width: "100px",
              height: "auto",
            },
            {
              title: "Cleaning",
              value: 20,
              color: "#ff0000",
              width: "100px",
              height: "auto",
              label: "{()=>hii}",
            },
          ]}
        />
      </div>
      <div className="piecontent">
        <div className="categoryhead">
          <span className="box1"></span>Spa/Salon for Women
        </div>
        <div className="categoryhead">
          <span className="box2"></span>Spa/Salon for Men
        </div>
        <div className="categoryhead">
          <span className="box3"></span>Home Appliances
        </div>
        <div className="categoryhead">
          <span className="box4"></span>Electricians
        </div>
        <div className="categoryhead">
          <span className="box5"></span>Cleaning
        </div>
      </div>
    </div>
  );
}
