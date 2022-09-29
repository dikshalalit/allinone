import React from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

export default function AllBooking() {
  const allbooking = [
    {
      Sno: 1,
      Bookingid: "1234567890123456789012345",
      Date: "09/27/2022",
      ServiceName: "Hair Color",
      TimeSlot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      Status: "Completed",
    },
    {
      Sno: 2,
      Bookingid: "1234567890123456789012345",
      Date: "09/27/2022",
      ServiceName: "Hair Color",
      TimeSlot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      Status: "Pending",
    },
    {
      Sno: 3,
      Bookingid: "1234567890123456789012345",
      Date: "09/27/2022",
      ServiceName: "Hair Color",
      TimeSlot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      Status: "Cancelled",
    },
    {
      Sno: 4,
      Bookingid: "1234567890123456789012345",
      Date: "09/27/2022",
      ServiceName: "Hair Color",
      TimeSlot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      Status: "Pending",
    },
    {
      Sno: 5,
      Bookingid: "1234567890123456789012345",
      Date: "09/27/2022",
      ServiceName: "Hair Color",
      TimeSlot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      Status: "Cancelled",
    },
    {
      Sno: 6,
      Bookingid: "1234567890123456789012345",
      Date: "09/27/2022",
      ServiceName: "Hair Color",
      TimeSlot: "10:00 AM to 11:00 AM",
      Price: "8,000",
      Status: "Completed",
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
            Dashboard/Booking/<span>All Booking</span>
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
              {allbooking.map((item) => {
                return (
                  <tr>
                    <td>{item.Sno}</td>
                    <td>{item.Bookingid}</td>
                    <td>{item.Date}</td>
                    <td>{item.ServiceName}</td>
                    <td>{item.TimeSlot}</td>
                    <td>{item.Price}</td>
                    {item.Status === "Completed" ? (
                      <td className="complete">{item.Status}</td>
                    ) : item.Status === "Pending" ? (
                      <td className="pending">{item.Status}</td>
                    ) : (
                      <td className="cancelled">{item.Status}</td>
                    )}
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
