import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import "../Style/Subcategory.css";
import Selector from "./compo/Selector";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

Modal.setAppElement("#root");

export default function SubAddCategory() {
  const [submodel, setsubmodel] = useState(false);
  const [id, setId] = useState(0);
  const increase = (id) => {
    console.log("selected", id);
    if (sub[id - 1].subcategory.length !== 0)
      return <Selector sub={sub[id - 1].subcategory} setId={setId} />;
    if (sub[id - 1].subcategory.subcategory.length !== 0)
      return (
        <Selector sub={sub[id - 1].subcategory.subcategory} setId={setId} />
      );
  };

  const sub = [
    {
      _id: 1,
      categoryName: "Spa/Salon for Women",
      subcategory: [
        {
          _id: 1,
          categoryName: "Spa",
          subcategory: [
            {
              _id: 1,
              categoryName: "Stress Relief Therapies",
              subcategory: [{}],
              services: [],
            },
            {
              _id: 2,
              categoryName: "Pain Relief Therapies",
              subcategory: [{}],
              services: [],
            },
            {
              _id: 2,
              categoryName: "Anti Aging Body Scrub",
              subcategory: [{}],
              services: [],
            },
          ],
          services: [],
        },
        {
          _id: 2,
          categoryName: "Saloon",
          subcategory: [],
          services: [],
        },
      ],
      services: [],
    },
    {
      _id: 2,
      categoryName: "Massage/Salon for men",
      subcategory: [
        {
          _id: 1,
          categoryName: "SPA",
          subcategory: [],
          services: [],
        },
        {
          _id: 2,
          categoryName: "Salon",
          subcategory: [],
          services: [],
        },
      ],
      services: [],
    },
    {
      _id: 3,
      categoryName: "Home Applicances",
      subcategory: [
        {
          _id: 1,
          categoryName: "Refrigerator",
          subcategory: [],
          services: [],
        },
        {
          _id: 2,
          categoryName: "Television",
          subcategory: [],
          services: [],
        },
        {
          _id: 3,
          categoryName: "Washing Machine",
          subcategory: [],
          services: [],
        },
        {
          _id: 4,
          categoryName: "Water Purifier",
          subcategory: [],
          services: [],
        },
      ],
      services: [],
    },
    {
      _id: 4,
      categoryName: "AC Service",
      subcategory: [],
      services: ["Services"],
    },
    {
      _id: 5,
      categoryName: "Cleaning",
      subcategory: [],
      services: [],
    },
    {
      _id: 6,
      categoryName: "Electricians",
      subcategory: [],
      services: [],
    },
  ];
  return (
    <div className="categoryalign">
      <SideBar />
      <div className="rightobject">
        <Navbar />
        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead2">Sub-Categories</span>
          <div className="path">
            Dashboard/Sub-Categories/<span>Sub-Add Category</span>
          </div>
          <div className="inputbox">
            <Selector sub={sub} setId={setId} />
            {id && increase(id)}
            {id && increase(id)}

            <div className="d-flex">
              <button
                className="subbtn"
                id="subbtn"
                onClick={() => setsubmodel(true)}
              >
                Add Sub-Category
              </button>
              <button className="subbtn" id="catbn">
                Add Service
              </button>
            </div>
            <Modal isOpen={submodel} style={customStyles}>
              <h4>Add Sub-Category</h4>

              <label for="Cname" className="Cname">
                Sub-Category Name
              </label>
              <input
                type="text"
                id="Cname"
                name="fav_language"
                className="Cinput"
              />
              <label for="Cimage" className="Cimage">
                Upload Sub-Category Image
              </label>
              <input
                type="file"
                id="Cimage"
                name="fav_language"
                className="Cinput"
              />
              <button
                className="addbtn"
                onClick={() => {
                  setsubmodel(false);
                  document.getElementById("subbtn").style.display = "none";
                }}
              >
                ADD
              </button>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
