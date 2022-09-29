import React from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

export default function BannerList() {
  const bannerlist = [
    { sno: 1, bname: "Spa/Salon for women", created: "09/23/2022, 13:06PM" },
    { sno: 2, bname: "Spa/Salon for women", created: "09/23/2022, 13:06PM" },
    { sno: 3, bname: "Spa/Salon for women", created: "09/23/2022, 13:06PM" },
    { sno: 4, bname: "Spa/Salon for women", created: "09/23/2022, 13:06PM" },
  ];
  return (
    <div className="categoryalign">
      <SideBar />
      <div className="rightobject">
        <Navbar />

        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead2">Banner</span>
          <div className="path">
            Dashboard/Banner/<span>Banner List</span>
          </div>
          <div className="inputbox2">
            <table className="listtable">
              <tr className="rowone">
                <td className="b1">S.no.</td>
                <td>Banner Name</td>
                <td>Banner Image</td>
                <td>Created At</td>
                <td className="b2">Action</td>
              </tr>
              {bannerlist.map((item) => {
                return (
                  <tr>
                    <td>{item.sno}</td>
                    <td>{item.bname}</td>
                    <td>
                      <i className="fa-solid fa-eye eye"></i>
                    </td>
                    <td>{item.created}</td>
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
