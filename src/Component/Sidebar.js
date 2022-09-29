import React, { useState } from "react";
import Logo from "../Assests/logo.png";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
import "../Style/Sidebar.css";

export default function SideBar() {
  const [Category, setCategory] = useState(false);
  const [SubCategory, setSubCategory] = useState(false);
  const [Banner, setBanner] = useState(false);
  const [Sidenavopen, setSidenavopen] = useState(true);
  const [Booking, setBooking] = useState(false);
  const [Service, setService] = useState(false);
  const [Subadmin, setSubadmin] = useState(false);

  return (
    <div className="screenbg">
      <Collapse in={Sidenavopen} dimension="width">
        <div className="dashbox">
          <div className="sidebar">
            <div className="logoset">
              <img src={Logo} className="logoimg" alt="logoimg" />
              <span>All In One</span>
            </div>
            <div className="dashhead">Dashboard</div>
            <div className="sidebox">
              <div
                onClick={() => setCategory(!Category)}
                aria-controls="Booking-list"
                aria-expanded={Category}
                className="subhead"
                eventKey="0"
              >
                <div>Categories</div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <Collapse in={Category}>
                <ul id="sub-list" className="BookingList">
                  <Link to={"/AddCategory"}>
                    <li>Add Category</li>
                  </Link>
                  <Link to={"/CategoryList"}>
                    <li>Category List</li>
                  </Link>
                </ul>
              </Collapse>

              <div
                onClick={() => setSubCategory(!SubCategory)}
                aria-controls="sub-list"
                aria-expanded={SubCategory}
                className="subhead"
                eventKey="1"
              >
                <div>Sub-categories</div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>

              <Collapse in={SubCategory}>
                <ul id="sub-list" className="BookingList">
                  <Link to={"/SubAddCategory"}>
                    <li>Add Sub-Category</li>
                  </Link>
                  <Link to={"/SubCategoryList"}>
                    <li>Sub-Category List</li>
                  </Link>
                </ul>
              </Collapse>

              <div
                onClick={() => setBooking(!Booking)}
                aria-controls="sub-list"
                aria-expanded={Booking}
                className="subhead"
                eventKey="2"
              >
                <div>Booking</div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>

              <Collapse in={Booking}>
                <ul id="sub-list" className="BookingList">
                  <Link to={"/AllBooking"}>
                    <li>All Booking</li>
                  </Link>
                  <Link to={"/UpcomingBooking"}>
                    <li>Upcoming Booking</li>
                  </Link>
                  <Link to={"/Pending"}>
                    <li>Pending Booking</li>
                  </Link>
                  <Link to={"/RejectedBooking"}>
                    <li>Rejected Booking</li>
                  </Link>
                </ul>
              </Collapse>

              <div
                onClick={() => setBanner(!Banner)}
                aria-controls="sub-list"
                aria-expanded={Banner}
                className="subhead one"
                eventKey="3"
              >
                <div>Banner</div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>

              <Collapse in={Banner}>
                <ul id="sub-list" className="BookingList oneb">
                  <Link to={"/Banner"}>
                    <li>Add Banner</li>
                  </Link>
                  <Link to={"/BannerList"}>
                    <li>Banner List</li>
                  </Link>
                </ul>
              </Collapse>

              <div
                onClick={() => setService(!Service)}
                aria-controls="sub-list"
                aria-expanded={Service}
                className="subhead"
                eventKey="4"
              >
                <div>Servicemen</div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>

              <Collapse in={Service}>
                <ul id="sub-list" className="BookingList">
                  <Link to={"/ServiceRequest"}>
                    <li>Servicemen Request</li>
                  </Link>
                  <Link to={"/Acceptedservicemen"}>
                    <li>Accepted Request</li>
                  </Link>
                  <Link to={"/Pendingservicemen"}>
                    <li>Pending Request</li>
                  </Link>
                  <Link to={"/RejectServicemen"}>
                    <li>Reject Request</li>
                  </Link>
                </ul>
              </Collapse>

              <div
                onClick={() => setSubadmin(!Subadmin)}
                aria-controls="sub-list"
                aria-expanded={Subadmin}
                className="subhead"
                eventKey="5"
              >
                <div>Sub-Admin</div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>

              <Collapse in={Subadmin}>
                <ul id="sub-list" className="BookingList">
                  <Link to={"/AddSubAdmin"}>
                    <li>Add Sub-Admin</li>
                  </Link>
                  <Link to={"/SubAdminList"}>
                    <li>Sub-Admin List</li>
                  </Link>
                </ul>
              </Collapse>
            </div>
          </div>
        </div>
      </Collapse>
      <button
        onClick={() => setSidenavopen(!Sidenavopen)}
        aria-controls="Booking-list"
        aria-expanded={Sidenavopen}
        className="gripbtnside"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
