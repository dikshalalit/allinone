import React, { useState } from "react";
import "./ServiceCard.css";
import STypeDespModal from "./STypeDespModal";

export default function ServicePlan(props) {
  const [despModal, setDespModal] = useState(false);
  const handleDespModal = () => {
    setDespModal(true);
  };
  return (
    <div className="col-4">
      <div className="PlanBox" style={{ backgroundColor: props.color }}>
        <h6>{props.name}</h6>
        <div className="PlanInput1">{props.data.price}</div>
        <div className="PlanInput2" onClick={handleDespModal}>
          {props.data.description}
        </div>
      </div>

      <STypeDespModal
        data={despModal}
        openModal={setDespModal}
        despData={props.data.description}
      />
    </div>
  );
}
