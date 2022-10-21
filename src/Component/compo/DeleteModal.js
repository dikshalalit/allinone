import React, { useState, useEffect } from "react";
import "../../Style/Category.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "60%",
    height: "auto",
    overflowY: "auto",
  },
};

export default function DeleteModal(props) {
  const closeModal = () => {
    props.openModal(false);
  };

  const deleteList = () => {
    props.CatDelete();
    props.openModal(false);
  };

  return (
    <div>
      <Modal isOpen={props.data} style={customStyles}>
        <center>
          <h4 className="mt-4">
            Are you sure you want to Delete this Category?
          </h4>

          <button className="yesbtn" onClick={deleteList}>
            Yes
          </button>
          <button className="Nobtn" onClick={closeModal}>
            No
          </button>
        </center>
      </Modal>
    </div>
  );
}
