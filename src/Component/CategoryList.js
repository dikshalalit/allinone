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

export default function CategoryList() {
  const [imageModal, setImageModal] = useState(false);
  const [deletemodal, setDeletemodal] = useState(false);
  const [categorylist, setCategorylist] = useState([]);
  const [categoryid, setcategoryid] = useState();
  const [trackEdit, setTrackEdit] = useState();
  const [editName, setEditName] = useState("");

  const notifyupdate = (message) => toast(message);

  const handleEditAPI = async (id) => {
    console.log(editName, id);
    axios
      .put(
        api + "admin/category",
        {
          id: id,
          name: editName,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((val) => {
        console.log(val);
        setTrackEdit(undefined);
        handlecategories();
        notifyupdate(val.data.message);
      })
      .catch((e) => {
        console.log(e);
        setTrackEdit(undefined);
      });
  };
  const handleCancel = () => {
    setTrackEdit(undefined);
  };

  const edita = (e) => {
    setEditName(e.target.value);
  };

  const handleEdit = (item) => {
    setTrackEdit(item._id);
    setEditName(item.name);
  };
  const handlecategoryid = (item) => {
    setDeletemodal(true);
    setcategoryid(item.target.id);
    console.log(item.target.id);
  };

  const notify = (message) => toast(message);

  const handlecategories = () => {
    axios
      .get(api + "admin/getAllCategories", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setCategorylist(res.data.category);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handlecategories();
  }, []);

  const handleDelete = () => {
    axios
      .delete(api + "admin/category", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: {
          id: categoryid,
        },
      })
      .then((value) => {
        handlecategories();
        notify(value.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    setDeletemodal(false);
  };

  useEffect(() => {
    handleDelete();
  }, []);

  return (
    <div className="categoryalign">
      <div className="sidefix">
        <SideBar />
      </div>
      <div className="rightobject">
        <Navbar />

        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead2">Categories</span>
          <div className="path">
            Dashboard/Categories/<span>Category List</span>
          </div>
          <div className="inputbox2">
            <table className="listtable">
              <tr className="rowone">
                <td className="b1">S.no.</td>
                <td>Category Name</td>
                <td>Category Image</td>
                <td>Created At</td>
                <td className="b2">Action</td>
              </tr>
              {categorylist.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    {trackEdit === item._id ? (
                      <td id="categorynameid">
                        <ContentEditable
                          html={editName}
                          onChange={edita}
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
                      {trackEdit === item._id ? (
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
                            className="fa-solid fa-pen-to-square edit"
                            onClick={() => {
                              handleEdit(item);
                            }}
                          ></i>
                          <i
                            className="fa-solid fa-trash delete"
                            id={item._id}
                            onClick={handlecategoryid}
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
