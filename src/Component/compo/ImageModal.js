import React, { useState } from "react";
import Modal from "react-modal";
import Logo from "../../Assests/mainImage.png";

import "../../Style/Category.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    overflowY: "auto",
  },
};
export default function ImageModal(props) {
  const handleModal = () => {
    props.openModal(false);
  };
  return (
    <div>
      <Modal isOpen={props.data} style={customStyles}>
        <div onClick={handleModal} className="imageModalClose">
          <div>x</div>
        </div>
        <img src={Logo} alt="Image" className="imageModal" />
      </Modal>
    </div>
  );
}
