import React, { useState, useEffect } from "react";
import "../Style/Category.css";
import Modal from "react-modal";

export default function ServiceModal() {
  const [categorymodal, setCategorymodal] = useState(true);

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
  const OVERLAY_STYLE = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    top: "0",
    left: "0",
    width: "80%",
    height: "100%",
    backgroundColor: "rgba(0,0,0, .8)",
    zIndex: "1000",
    overflowY: "auto",
  };
  Modal.setAppElement("#root");

  return (
    <div>
      <Modal isOpen={categorymodal} style={(customStyles, OVERLAY_STYLE)}>
        <button
          className="closeimagemodal"
          onClick={() => {
            setCategorymodal(false);
          }}
        >
          <i className="fa-solid fa-arrow-left addcathead"></i>
        </button>

        <h2 align="center" className="mt-3 mb-3">
          Category Name
        </h2>
        <table className="servicetable">
          <tr>
            <td>S.no.</td>
            <td>Name</td>
            <td> image</td>
            <td>Action</td>
          </tr>
        </table>
      </Modal>
    </div>
  );
}
