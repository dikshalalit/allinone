import React, { useState, useEffect } from "react";
import "../../Style/Category.css";
import Modal from "react-modal";
import ServiceType from "./ServiceType";
import axios from "axios";
import { api } from "../config";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "auto",
    overflowY: "auto",
  },
};

export default function UpdateService(props) {
  const closeModal = () => {
    props.openModal(false);
  };
  const [data, setData] = useState(props.serviceData);

  const changeName = (e) => {
    setData({ ...data, name: e.target.value });
  };
  const changeDesp = (e) => {
    setData({ ...data, description: e.target.value });
  };

  const silverChangeDesp = (e) => {
    setData({
      ...data,
      silver: { ...data.silver, description: e.target.value },
    });
  };

  const silverChangePrice = (e) => {
    setData({ ...data, silver: { ...data.silver, price: e.target.value } });
  };

  const goldChangeDesp = (e) => {
    setData({
      ...data,
      gold: { ...data.gold, description: e.target.value },
    });
  };

  const goldChangePrice = (e) => {
    setData({ ...data, gold: { ...data.gold, price: e.target.value } });
  };
  const platinumChangeDesp = (e) => {
    setData({
      ...data,
      platinum: { ...data.platinum, description: e.target.value },
    });
  };

  const platinumChangePrice = (e) => {
    setData({ ...data, platinum: { ...data.platinum, price: e.target.value } });
  };

  const updateList = () => {
    props.openModal(false);
    handleUpdate();
  };

  //update API

  const handleUpdate = () => {
    console.log("new", data);
    let newObj = { ...data };
    newObj.id = newObj._id;
    delete newObj._id;
    console.log("abcd", newObj);
    axios
      .put(
        api + "admin/service",
        {
          id: newObj.id,
          name: newObj.name,
          description: newObj.description,
          silver: {
            description: newObj.silver.description,
            price: newObj.silver.price,
          },
          gold: {
            description: newObj.gold.description,
            price: newObj.gold.price,
          },
          platinum: {
            description: newObj.platinum.description,
            price: newObj.platinum.price,
          },
        },

        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((value) => {
        console.log(value.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Modal isOpen={props.data} style={customStyles}>
        <div className="d-flex ">
          <diV className="serviceFields">
            <label for="CTname" className="Cname">
              Category
            </label>

            <input
              type="text"
              id="CTname"
              name="fav_language"
              className="sinput"
              value={props.categoryName}
            ></input>

            <label for="Cname" className="Cname">
              Service Name
            </label>
            <input
              type="text"
              id="Cname"
              name="fav_language"
              className="sinput"
              value={data.name}
              onChange={changeName}
            ></input>

            <label for="Desp" className="Cname">
              Service Description
            </label>
            <input
              type="text"
              id="Desp"
              name="fav_language"
              className="sinput"
              value={data.description}
              onChange={changeDesp}
            />
            <label for="Cimage" className="Cimage">
              Service Image
            </label>
            <input
              type="file"
              id="Cimage"
              name="fav_language"
              className="sinput"
            />
          </diV>
          <div className="servicetypebox">
            <ServiceType
              name={"Silver Service"}
              color={"#989DA0"}
              Udesp={data.silver.description}
              Uprice={data.silver.price}
              desp={silverChangeDesp}
              price={silverChangePrice}
            />
            <ServiceType
              name={"Gold Service"}
              color={"#AC9B4B"}
              Udesp={data.gold.description}
              Uprice={data.gold.price}
              desp={goldChangeDesp}
              price={goldChangePrice}
            />
            <ServiceType
              name={"Platinum Service"}
              color={"#4E637B"}
              Udesp={data.platinum.description}
              Uprice={data.platinum.price}
              desp={platinumChangeDesp}
              price={platinumChangePrice}
            />
          </div>
        </div>
        <div className="SUpdateBtns">
          <button className="savebtn" onClick={updateList}>
            Update
          </button>

          <button className="savebtn cancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
