import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "auto",
    overflowY: "auto",
  },
};
export default function STypeDesp(props) {
  const handleClose = () => {
    props.openModal(false);
  };
  return (
    <div>
      <Modal isOpen={props.data} style={customStyles}>
        <button className="backBtn" onClick={handleClose}>
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div align="center">{props.despData}</div>
      </Modal>
    </div>
  );
}
