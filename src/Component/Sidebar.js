import React, { useEffect, useState } from "react";
import Logo from "../Assests/logo.png";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
import "../Style/Sidebar.css";

export default function SideBar() {
  const [Sidenavopen, setSidenavopen] = useState(true);
  const allSideData = [
    {
      sideName: "DashBoard",
      link: "/Dashboard",
    },
    {
      sideName: "Categories",
      sub: [
        {
          sideName: "Add Category",
          link: "/AddCategory",
        },
        {
          sideName: "Add Services",
          link: "/AddService",
        },
        {
          sideName: "Category List",
          link: "/CategoryList",
        },
        {
          sideName: "Service List",
          link: "/ServiceList1",
        },
      ],
    },
    {
      sideName: "Sub-Categories",
      sub: [
        {
          sideName: "Sub-Category 1",
          sub: [
            {
              sideName: "Add Sub-Category",
              link: "/SubAddCategory",
            },
            {
              sideName: "Add Services",
              link: "/Addservice1",
            },
            {
              sideName: "Sub-Category List",
              link: "/SubCategoryList",
            },
            {
              sideName: "Service List",
              link: "/ServiceList2",
            },
          ],
        },
        {
          sideName: "Sub-Category 2",
          sub: [
            {
              sideName: "Add Sub-Category2",
              link: "/SubAddcategory2",
            },
            {
              sideName: "Add Services",
              link: "/Addservice3",
            },
            {
              sideName: "Sub-Category 2 List",
              link: "/SubCategoryList2",
            },
            {
              sideName: "Service List",
              link: "/ServiceList3",
            },
          ],
        },
      ],
    },
    {
      sideName: "Booking",
      sub: [
        {
          sideName: "All Booking",
          link: "/AllBooking",
        },
        {
          sideName: "Upcoming Booking",
          link: "/UpcomingBooking",
        },
        {
          sideName: "Pending Booking",
          link: "/Pending",
        },
        {
          sideName: "Rejected Booking",
          link: "/RejectedBooking",
        },
        {
          sideName: "Completed Booking",
          link: "/CompletedBooking",
        },
        ,
      ],
    },
    {
      sideName: "Banner",
      sub: [
        {
          sideName: "Add Banner",
          link: "/Banner",
        },
        {
          sideName: "Banner List",
          link: "/BannerList",
        },
      ],
    },
    {
      sideName: "Servicemen",
      sub: [
        {
          sideName: "Servicemen Request",
          link: "/VendorRequest",
        },
        {
          sideName: "Accepted Request",
          link: "/Acceptedservicemen",
        },
        {
          sideName: "Pending Request",
          link: "/Pendingservicemen",
        },
        {
          sideName: "Reject Request",
          link: "/RejectServicemen",
        },
      ],
    },
    {
      sideName: "Vendor",
      sub: [
        {
          sideName: "Category Vendor",
          link: "/CategoryVendor",
        },
        {
          sideName: "SubCategory Vendor",
          link: "/SubCategoryVendor",
        },
        {
          sideName: "SubCategory2 Vendor",
          link: "/SubCategory2Vendor",
        },
      ],
    },
    {
      sideName: "Sub-Admin",
      sub: [
        {
          sideName: "Add SubAdmin",
          link: "/AddSubAdmin",
        },
        {
          sideName: "Sub-AdminList",
          link: "/SubAdminList",
        },
      ],
    },
  ];
  const [SideData, setSideData] = useState(allSideData);

  const [obj, setObj] = useState({});
  useEffect(() => {
    let responsibilities = JSON.parse(localStorage.getItem("responsibility"));
    if (responsibilities) {
      let p = SideData.filter((val) => {
        if (responsibilities.includes(val.sideName)) return val;
      });
      setSideData(p);
    }
    let newObj = {};
    for (let i = 0; i < SideData.length; i++) {
      if (SideData[i].sub) {
        let temp = SideData[i];
        temp.sub.map((item) => {
          if (item.sub) {
            newObj[item.sideName] = false;
          }
        });
        newObj[temp.sideName] = false;
      }
    }
    setObj({ ...newObj });
  }, []);

  const handleCollapse = (val, bool) => {
    let updatedObj = { ...obj };
    updatedObj[val] = !bool;
    setObj(updatedObj);
  };
  ////////////////////////////////////////////////

  return (
    <div className="screenbg">
      <div className="dashbox">
        <div className="sidebar">
          <Collapse in={Sidenavopen} dimension="width">
            <div className="sidebar">
              <div className="logoset">
                <img src={Logo} className="logoimg" alt="logoimg" />
                <span>All In </span>
                <span>One</span>
              </div>
              {SideData.map((val) => {
                if (val.sub) {
                  return (
                    <>
                      <div
                        onClick={() =>
                          handleCollapse(val.sideName, obj[val.sideName])
                        }
                        aria-controls="Booking-list"
                        aria-expanded={obj[val.sideName]}
                        className="subhead"
                        eventKey="0"
                      >
                        <div>{val.sideName}</div>
                        <i class="fa-solid fa-chevron-down"></i>
                      </div>
                      <Collapse in={obj[val.sideName]}>
                        <ul id="sub-list" className="BookingList">
                          {val.sub.map((item) => {
                            if (item.sub) {
                              ///////////////////////////////////////

                              return (
                                <>
                                  <div
                                    onClick={() =>
                                      handleCollapse(
                                        item.sideName,
                                        obj[item.sideName]
                                      )
                                    }
                                    aria-controls="Booking-list"
                                    aria-expanded={obj[item.sideName]}
                                    className="subhead"
                                    eventKey="0"
                                  >
                                    <div>{item.sideName}</div>
                                    <i class="fa-solid fa-chevron-down"></i>
                                  </div>
                                  <Collapse in={obj[item.sideName]}>
                                    <ul id="sub-list" className="BookingList">
                                      {item.sub.map((t) => {
                                        return (
                                          <Link to={t.link}>
                                            <li>{t.sideName}</li>
                                          </Link>
                                        );
                                      })}
                                    </ul>
                                  </Collapse>
                                </>
                              );
                              //////////////////////////////////////
                            } else {
                              return (
                                <Link to={item.link}>
                                  <li>{item.sideName}</li>
                                </Link>
                              );
                            }
                          })}
                        </ul>
                      </Collapse>
                    </>
                  );
                } else {
                  return (
                    <Link to={val.link}>
                      <div className="dashhead">{val.sideName}</div>
                    </Link>
                  );
                }
              })}
            </div>
          </Collapse>
        </div>
      </div>
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
