import React, { useState } from "react";
import "./ServiceCard.css";
import ServiceImage from "../../Assests/ServiceImage.jpg";
import ServicePlan from "./ServicePlan";
import DeleteModal from "./DeleteModal";
import STypeDespModal from "./STypeDespModal";
import UpdateService from "./UpdateService";

export default function ServiceCard(props) {
  const [deletemodal, setDeletemodal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [despmodal, setDespmodal] = useState(false);
  const handleDelete = (e) => {
    setDeletemodal(true);
    props.service(e.target.id);
  };

  const handleUpdate = (e) => {
    setUpdateModal(true);
    props.service(e.target.id);
  };
  const handleDespModal = () => {
    setDespmodal(true);
  };
  const handleDeleteService = () => {
    props.DeleteFunction();
  };

  return (
    <div className="col-6">
      <div className="ScardBox">
        <div className="SCardUpper">
          <div className="UpperText">
            <div>{props.catName}</div>
            <div>{props.value.name}</div>
            <div onClick={handleDespModal} className="despcurse">
              {props.value.description}
            </div>
            <div>{props.value.createdAt.split("T")[0]}</div>
          </div>
          <div>
            <img
              src={ServiceImage}
              alt="ServiceImage"
              className="ServiceImage"
            />
          </div>
        </div>
        <div className="row">
          <ServicePlan
            color="#989DA0"
            name={"Silver Plan"}
            data={props.value.silver}
          />
          <ServicePlan
            color="#AC9B4B"
            name={"Gold Plan"}
            data={props.value.gold}
          />
          <ServicePlan
            color="#4E637B"
            name={"Platinum Plan"}
            data={props.value.platinum}
          />
        </div>
        <div className="ServiceBtns">
          <button className="SUpdate" id={props.value} onClick={handleUpdate}>
            Update
          </button>
          <button
            className="SDelete"
            id={props.value._id}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <DeleteModal
        data={deletemodal}
        openModal={setDeletemodal}
        CatDelete={handleDeleteService}
      />
      <UpdateService
        data={updateModal}
        openModal={setUpdateModal}
        serviceData={props.value}
        categoryName={props.catName}
      />

      <STypeDespModal
        data={despmodal}
        openModal={setDespmodal}
        despData={props.value.description}
      />
    </div>
  );
}
