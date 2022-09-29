import React from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

export default function RejectedBooking() {
  const Pending = [
    {
      Sno: 1,
      Bookingid: "123456789012345678901234",
      Date: "22/09/22",
      Servicename: "Hair Color",
      Timeslot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      status: "Cancelled",
    },
    {
      Sno: 2,
      Bookingid: "123456789012345678901234",
      Date: "22/09/22",
      Servicename: "Hair Color",
      Timeslot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      status: "Cancelled",
    },
    {
      Sno: 3,
      Bookingid: "123456789012345678901234",
      Date: "22/09/22",
      Servicename: "Hair Color",
      Timeslot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      status: "Cancelled",
    },
    {
      Sno: 4,
      Bookingid: "123456789012345678901234",
      Date: "22/09/22",
      Servicename: "Hair Color",
      Timeslot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      status: "Cancelled",
    },
    {
      Sno: 5,
      Bookingid: "123456789012345678901234",
      Date: "22/09/22",
      Servicename: "Hair Color",
      Timeslot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      status: "Cancelled",
    },
    {
      Sno: 6,
      Bookingid: "123456789012345678901234",
      Date: "22/09/22",
      Servicename: "Hair Color",
      Timeslot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      status: "Cancelled",
    },
  ];
  return (
    <div className="categoryalign">
      <SideBar />
      <div className="rightobject">
        <Navbar />

        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead2">Booking</span>
          <div className="path">
            Dashboard/Booking/<span>Rejected Booking</span>
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
              {Pending.map((item) => {
                return (
                  <tr>
                    <td>{item.Sno}</td>
                    <td>{item.Bookingid}</td>
                    <td>{item.Date}</td>
                    <td>{item.Servicename}</td>
                    <td>{item.Timeslot}</td>
                    <td>{item.Price}</td>
                    <td className="cancelled">{item.status}</td>
                  </tr>
                );
              })}
            </table>

            <div className="pagination">
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
