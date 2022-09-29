import React from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

export default function SubAdminList() {
  const SubAdminList = [
    {
      sno: 1,
      uname: "Raghav_haircolor",
      password: "aghav_haircolor",
      count: "2",
    },
    {
      sno: 2,
      uname: "Raghav_haircolor",
      password: "aghav_haircolor",
      count: "2",
    },
    {
      sno: 3,
      uname: "Raghav_haircolor",
      password: "aghav_haircolor",
      count: "2",
    },
    {
      sno: 4,
      uname: "Raghav_haircolor",
      password: "aghav_haircolor",
      count: "2",
    },
  ];
  return (
    <div className="categoryalign">
      <SideBar />
      <div className="rightobject">
        <Navbar />

        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead2">Sub-Admin</span>
          <div className="path">
            Dashboard/Sub-Admin/<span>Sub-Admin List</span>
          </div>
          <div className="inputbox2">
            <table className="listtable">
              <tr className="rowone">
                <td className="b1">S.no.</td>
                <td>UserName</td>
                <td>Password</td>
                <td>Count of Permissions</td>
                <td className="b2">Action</td>
              </tr>

              {SubAdminList.map((item) => {
                return (
                  <tr>
                    <td>{item.sno}</td>
                    <td>{item.uname}</td>
                    <td>{item.password}</td>
                    <td>{item.count}</td>
                    <td>
                      <i class="fa-solid fa-pen-to-square edit"></i>
                      <i class="fa-solid fa-trash delete"></i>
                    </td>
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
