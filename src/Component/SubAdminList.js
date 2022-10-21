import React, { useState, useEffect } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Modal from "react-modal";
import axios from "axios";
import { api } from "./config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export default function SubAdminList() {
  const [userData, setUserData] = useState([]);
  const [deletemodal, setDeletemodal] = useState(false);
  const [userId, setUserId] = useState("");
  const [responsibilityModal, setResponsibilityModal] = useState(false);
  const [userIDonEdit, setUserIDonEdit] = useState("");
  const [userName, setUserName] = useState("");
  const [responsibilityData, setResponsibilityData] = useState([]);

  const responsible = [
    "Finance",
    "Top Host",
    "Top Users",
    "Host Requests",
    "Gifts",
    "Banners",
    "Emojis",
    "All Users",
  ];

  const handleUserId = (item) => {
    setDeletemodal(true);
    setUserId(item.target.id);
  };

  const handleEditId = (item) => {
    setUserIDonEdit(item._id);
    setUserName(item.userId);
    setResponsibilityModal(true);
    item.responsibilities = item.responsibilities.filter((item) => {
      if (responsible.includes(item)) return item;
    });
    setResponsibilityData(item.responsibilities);
  };

  const handleResponsible = (item) => {
    var responsibility_array = [...responsibilityData];
    if (item.target.checked) {
      responsibility_array = [...responsibilityData, item.target.value];
    } else {
      responsibility_array.splice(
        responsibilityData.indexOf(item.target.value),
        1
      );
    }
    setResponsibilityData(responsibility_array);
  };

  const handleUserData = () => {
    axios
      .get(api + "admin/subAdminAll", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleUserData();
  }, []);

  const handleDelete = () => {
    axios
      .delete(api + "admin/subAdmin", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: {
          id: userId,
        },
      })
      .then((value) => {
        handleUserData();
        toast("Sub-Admin Deleted Sucessfully");
      })
      .catch((error) => {
        console.log(error);
      });

    setDeletemodal(false);
  };

  const handleEditAPI = async () => {
    axios
      .put(
        api + "admin/subAdmin",
        {
          id: userIDonEdit,
          responsibilities: responsibilityData,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((val) => {
        console.log(val);
        setResponsibilityModal(false);
        handleUserData();
        toast("Sub-Admin Updated Sucessfully");
      })
      .catch((e) => {
        console.log(e);
      });
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
          <span className="addcathead2">Sub-Admin</span>
          <div className="path">
            Dashboard/Sub-Admin/<span>Sub-Admin List</span>
          </div>
          <div className="inputbox2">
            <table className="listtable2">
              <tr className="rowone">
                <td className="b1">S.no.</td>
                <td>UserName</td>
                <td>Count of Permissions</td>
                <td className="b2">Action</td>
              </tr>

              {userData.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.userId}</td>
                    <td>{item.responsibilities.length}</td>
                    <td>
                      <i
                        class="fa-solid fa-pen-to-square edit"
                        id={item._id}
                        onClick={() => handleEditId(item)}
                      ></i>
                      <i
                        class="fa-solid fa-trash delete"
                        id={item._id}
                        onClick={handleUserId}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </table>

            <Modal isOpen={deletemodal} style={customStyles}>
              <center>
                <h4 className="mt-4">
                  Are you sure you want to Delete this Sub-Admin?
                </h4>

                <button className="yesbtn" onClick={handleDelete}>
                  Yes
                </button>
                <button className="Nobtn" onClick={() => setDeletemodal(false)}>
                  No
                </button>
              </center>
            </Modal>

            <Modal
              isOpen={responsibilityModal}
              style={(customStyles, OVERLAY_STYLE)}
            >
              <button
                className="closeimagemodal"
                onClick={() => {
                  setResponsibilityModal(false);
                }}
              >
                <i className="fa-solid fa-arrow-left addcathead"></i>
              </button>

              <h2 align="center" className="mt-3 mb-3">
                {userName}
              </h2>
              <hr />

              <h5 className="subadminhead checkalign">Responsibilities</h5>
              <div className="row checkalign">
                {responsible.map((item) => {
                  return (
                    <>
                      <div className="col-3">
                        {responsibilityData.includes(item) ? (
                          <>
                            <input
                              type="checkbox"
                              className="incheck"
                              id="checkedId"
                              onClick={(item) => handleResponsible(item)}
                              value={item}
                              checked
                            />
                            {item}
                          </>
                        ) : (
                          <>
                            <input
                              type="checkbox"
                              className="incheck"
                              onClick={(item) => handleResponsible(item)}
                              value={item}
                            />
                            {item}
                          </>
                        )}
                      </div>
                    </>
                  );
                })}
              </div>
              <center className="mt-5">
                <button className="yesbtn" onClick={handleEditAPI}>
                  Update
                </button>
                <button
                  className="Nobtn"
                  onClick={() => {
                    setResponsibilityModal(false);
                  }}
                >
                  Cancel
                </button>
              </center>
            </Modal>

            <div className="pagination">
              <div className="d-flex align-items-center">
                <button className="prevbtn">Previous</button>
                <button className="pageno">1</button>
                <button className="nxtbtn">Next</button>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
