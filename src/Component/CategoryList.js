import React from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

export default function CategoryList() {
  const Categoryitem = [
    {
      Sno: 1,
      CategoryName: "Spa/Salon for women",
      CategoryImage: "image",
      CreatedAt: "09/27/2022",
    },
    {
      Sno: 2,
      CategoryName: "Spa/Salon for women",
      CategoryImage: "image",
      CreatedAt: "09/27/2022",
    },
    {
      Sno: 3,
      CategoryName: "Spa/Salon for women",
      CategoryImage: "image",
      CreatedAt: "09/27/2022",
    },
    {
      Sno: 4,
      CategoryName: "Spa/Salon for women",
      CategoryImage: "image",
      CreatedAt: "09/27/2022",
    },
  ];

  return (
    <div className="categoryalign">
      <SideBar />
      <div className="rightobject">
        <Navbar />

        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead2">Categories</span>
          <div className="path">
            Dashboard/Categories/<span>Category List</span>
          </div>
          <div className="inputbox2">
            <table className="listtable">
              <tr className="rowone">
                <td className="b1">S.no.</td>
                <td>Category Name</td>
                <td>Category Image</td>
                <td>Created At</td>
                <td className="b2">Action</td>
              </tr>
              {Categoryitem.map((item) => {
                return (
                  <tr>
                    <td>{item.Sno}</td>
                    <td>{item.CategoryName}</td>
                    <td>
                      <i className="fa-solid fa-eye eye"></i>
                    </td>
                    <td>{item.CreatedAt}</td>
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
