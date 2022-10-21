import React from "react";
import Vendors from "../Assests/icon4.png";
import Booking from "../Assests/icon1.png";
import Earning from "../Assests/icon3.png";
import services from "../Assests/icon2.png";

export default function TotalData() {
  return (
    <div>
      <div className="tbox user">
        <div>
          <h2>Total Users </h2>
          <h1>50</h1>
        </div>
        <i class="fa-solid fa-user icon"></i>
      </div>

      <div className="tbox vendor">
        <div>
          <h2>Total Servicemen </h2>
          <h1>50</h1>
        </div>
        <div className="iconbg">
          <img src={Vendors}></img>
        </div>
      </div>

      <div className="tbox Booking">
        <div>
          <h2>Total Booking </h2>
          <h1>50</h1>
        </div>
        <div className="iconbg">
          <img src={Booking}></img>
        </div>
      </div>

      <div className="tbox services">
        <div>
          <h2>Total Services </h2>
          <h1>50</h1>
        </div>
        <div className="iconbg">
          <img src={services}></img>
        </div>
      </div>

      <div className="tbox earning">
        <div>
          <h2>Total Earning </h2>
          <h1>50</h1>
        </div>
        <div className="iconbg">
          <img src={Earning}></img>
        </div>
      </div>
    </div>
  );
}
