import React, { useEffect, useState } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Modal from "react-modal";
import axios from "axios";
import { api } from "./config";
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

export default function Serviceman() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [RejectmodalIsOpen, setRejectIsOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState("");
  const [vendorData, setVendorData] = useState([]);
  const getVendorData = () => {
    axios
      .get(api + "admin/getVendors", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setVendorData(res.data.vendors);
        console.log(res.data.vendors);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getVendorData();
  }, []);
  const requestHandler = (value) => {
    setIsOpen(true);
    setCurrentRequest(value);
  };
  const rejectrequestHandler = (value) => {
    setRejectIsOpen(true);
    setCurrentRequest(value);
  };
  const acceptRequest = () => {
    console.log("accepted", currentRequest);
    axios
      .put(
        api + "admin/acceptRequest",
        { id: currentRequest },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((response) => {
        if (response.data.success) {
          alert("Request accepted");
        }
        getVendorData();
      })
      .catch((e) => {
        console.log(e);
      });
    setIsOpen(false);
  };
  const rejectRequest = () => {
    console.log("Rejected", currentRequest);
    axios
      .put(
        api + "admin/rejectRequest",
        { id: currentRequest },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          alert("Request rejected");
          getVendorData();
        }
      })
      .catch((e) => {
        console.log(e);
      });
    setRejectIsOpen(false);
  };
  return (
    <div className="categoryalign">
      <div className="sidefix">
        <SideBar />
      </div>
      <div className="rightobject">
        <Navbar />

        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead">Servicemen</span>
          <div className="path">
            Dashboard/Servicemen/<span>Servicemen Request</span>
          </div>
          <div className="serviceinputbox">
            <table className="servicelisttable">
              <tr className="rowone">
                <td className="b1">S.no.</td>
                <td>Name</td>
                <td>DOB</td>
                <td>Email</td>
                <td>Mobile Number</td>
                <td>Current Address</td>
                <td>City</td>
                <td>Pin</td>
                <td className="b2">Approval</td>
              </tr>

              {vendorData.length !== 0 &&
                vendorData.map((val, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{val.firstName + " " + val.lastName}</td>
                      <td>{val.DOB.split("T")[0]}</td>
                      <td>{val.email}</td>
                      <td>{val.phone}</td>
                      <td>{val.address}</td>
                      <td>{val.city}</td>
                      <td>{val.pin}</td>
                      {val.requestStatus === "pending" ? (
                        <td>
                          <i
                            className="fa-solid fa-check right"
                            onClick={() => requestHandler(val._id)}
                          ></i>
                          <i
                            className="fa-solid fa-xmark wrong"
                            onClick={() => rejectrequestHandler(val._id)}
                          ></i>
                        </td>
                      ) : (
                        <td>{val.requestStatus}</td>
                      )}
                    </tr>
                  );
                })}
            </table>

            <div className="pagination">
              <div className="d-flex align-items-center">
                <button className="prevbtn">Previous</button>
                <button className="pageno">1</button>
                <button className="nxtbtn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <h5 className="ques">Are you sure you want to accept this request?</h5>
        <button className="yesbtn" onClick={acceptRequest}>
          Yes
        </button>
        <button className="Nobtn" onClick={() => setIsOpen(false)}>
          No
        </button>
      </Modal>

      <Modal isOpen={RejectmodalIsOpen} style={customStyles}>
        <h5 className="ques">Are you sure you want to reject this request?</h5>
        <button className="yesbtn rejectyes" onClick={rejectRequest}>
          Yes
        </button>
        <button
          className="Nobtn rejectno"
          onClick={() => setRejectIsOpen(false)}
        >
          No
        </button>
      </Modal>
    </div>
  );
}
