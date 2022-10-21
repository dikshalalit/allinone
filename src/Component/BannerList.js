import React, { useState, useEffect } from "react";
import "../Style/Category.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios from "axios";
import { api } from "./config";
import { ToastContainer, toast } from "react-toastify";
import ContentEditable from "react-contenteditable";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./compo/DeleteModal";
import ImageModal from "./compo/ImageModal";

export default function BannerList() {
  const [bannerList, setBannerList] = useState([]);
  const [editId, setEditId] = useState([]);
  const [editName, setEditName] = useState([]);
  const [bannerId, setBannerId] = useState([]);
  const [deletemodal, setDeletemodal] = useState(false);
  const [imageModal, setImageModal] = useState(false);

  const handleEdit = (item) => {
    setEditId(item._id);
    setEditName(item.name);
  };

  const handleCancel = (item) => {
    setEditId(undefined);
  };

  const handlenameonchange = (e) => {
    setEditName(e.target.value);
  };

  const notifyupdate = (message) => toast(message);

  const notifydelete = (message1) => toast(message1);

  const handleEditAPI = async (id) => {
    axios
      .put(
        api + "admin/banner",
        {
          id: id,
          name: editName,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        setEditId(undefined);
        handleBannerList();
        notifyupdate(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleBannerList = () => {
    axios
      .get(api + "admin/banner", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data.data);
        setBannerList(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleBannerList();
  }, []);

  const handleDeleteID = (item) => {
    setDeletemodal(true);
    setBannerId(item.target.id);
  };

  const handleDelete = () => {
    axios
      .delete(api + "admin/banner", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: {
          id: bannerId,
        },
      })
      .then((value) => {
        notifydelete(value.data.message);
        setDeletemodal(false);
        handleBannerList();
      })
      .catch((error) => {
        console.log(error);
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
          <span className="addcathead2">Banner</span>
          <div className="path">
            Dashboard/Banner/<span>Banner List</span>
          </div>
          <div className="inputbox2">
            <table className="listtable">
              <tr className="rowone">
                <td className="b1">S.no.</td>
                <td>Banner Id</td>
                <td>Banner Name</td>
                <td>Banner Image</td>
                <td>Created At</td>
                <td className="b2">Action</td>
              </tr>
              {bannerList.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item._id}</td>
                    {editId === item._id ? (
                      <td id="categorynameid">
                        <ContentEditable
                          html={editName}
                          onChange={handlenameonchange}
                          style={{ border: "solid" }}
                        />
                      </td>
                    ) : (
                      <td id="categorynameid">{item.name}</td>
                    )}
                    <td onClick={() => setImageModal(true)}>
                      <i className="fa-solid fa-eye eye"></i>
                    </td>
                    <td>{item.createdAt.split("T")[0]}</td>
                    <td>
                      {editId === item._id ? (
                        <>
                          <i
                            class="fa-sharp fa-solid fa-square-check"
                            onClick={() => handleEditAPI(item._id)}
                          ></i>
                          <i
                            class="fa-solid fa-rectangle-xmark"
                            onClick={handleCancel}
                          ></i>
                        </>
                      ) : (
                        <>
                          <i
                            class="fa-solid fa-pen-to-square edit"
                            onClick={() => handleEdit(item)}
                          ></i>
                          <i
                            class="fa-solid fa-trash delete"
                            id={item._id}
                            onClick={handleDeleteID}
                          ></i>
                        </>
                      )}
                    </td>
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

      <DeleteModal
        data={deletemodal}
        openModal={setDeletemodal}
        CatDelete={handleDelete}
      />

      <ImageModal data={imageModal} openModal={setImageModal} />
      <ToastContainer />
    </div>
  );
}
