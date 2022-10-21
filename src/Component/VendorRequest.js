import React, { useEffect, useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Modal from "react-modal";
import axios from "axios";
import { api } from "./config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardBtn from "./compo/CardBtn";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function CategoryVendor() {
  const [pendingRequest, setPendingRequest] = useState([]);
  const [acceptModal, setAcceptModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [vendorId, setVendorId] = useState("");

  const handlePending = () => {
    axios
      .get(api + "admin/getPending", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setPendingRequest(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handlePending();
  }, []);

  const handleRejectId = (value) => {
    setRejectModal(true);
    setVendorId(value);
  };

  const handleAccept = () => {
    axios
      .put(
        api + "admin/acceptRequest",
        { id: vendorId },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((response) => {
        if (response.data.success) {
          toast("Request Accepted");
        }
        handlePending();
      })
      .catch((e) => {
        console.log(e);
      });
    setAcceptModal(false);
  };

  const handleReject = () => {
    axios
      .put(
        api + "admin/rejectRequest",
        { id: vendorId },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((response) => {
        if (response.data.success) {
          toast("Request Rejected");
        }
        handlePending();
      })
      .catch((e) => {
        console.log(e);
      });
    setRejectModal(false);
  };

  return (
    <div className="categoryalign">
      <div className="sidefix">
        <SideBar />
      </div>
      <div className="rightobject">
        <Navbar />
        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcadivead"></i>
          <span className="addcathead2">Categories</span>
          <div className="path">
            Dashboard/Servicemen/<span>Servicemen Request</span>
          </div>
          <div className="inputbox vendorbox">
            <div className="row">
              <CardBtn
                data={pendingRequest}
                handleAccpet={setVendorId}
                handleReject={setVendorId}
                handleModalA={setAcceptModal}
                handleModalR={setRejectModal}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Modal isOpen={acceptModal} style={customStyles}>
        <h5 className="ques">Are you sure you want to accept this request?</h5>
        <button className="yesbtn" onClick={handleAccept}>
          Yes
        </button>
        <button className="Nobtn" onClick={() => setAcceptModal(false)}>
          No
        </button>
      </Modal>

      <Modal isOpen={rejectModal} style={customStyles}>
        <h5 className="ques">Are you sure you want to reject this request?</h5>
        <button className="yesbtn rejectyes" onClick={handleReject}>
          Yes
        </button>
        <button
          className="Nobtn rejectno"
          onClick={() => setRejectModal(false)}
        >
          No
        </button>
      </Modal>
    </div>
  );
}
