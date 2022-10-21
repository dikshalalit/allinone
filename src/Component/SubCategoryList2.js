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

export default function SubCategoryList() {
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const [subCatForSub2List, setSubCatForSub2List] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState([]);
  const [sub2List, setSub2List] = useState([]);
  const [subCat2Id, setSubCat2Id] = useState();
  const [deleteModal, setDeleteModal] = useState(false);
  const [subCateroy2IdonEdit, setSubCateroy2IdonEdit] = useState("");
  const [editValue, setEditValue] = useState("");
  const [imageModal, setImageModal] = useState(false);

  const handleCategoryID = (item) => {
    setCategoryId(item.target.value);
  };

  const handleSubCategoryID = (item) => {
    setSubCategoryId(item.target.value);
  };

  const handleSubCat2ID = (item) => {
    setSubCat2Id(item.target.id);
    console.log(item.target.id);
    setDeleteModal(true);
  };

  const notify1 = (message) => toast(message);

  const notifyupdate = (message) => toast(message);

  const handleEditSubCat2 = (item) => {
    setSubCateroy2IdonEdit(item._id);
    setEditValue(item.name);
  };

  const handleCancel = () => {
    setSubCateroy2IdonEdit(undefined);
  };

  const handleEditValue = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditAPI = async (id) => {
    console.log(editValue, id);
    axios
      .put(
        api + "admin/subCategory2",
        {
          id: id,
          name: editValue,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((val) => {
        console.log(val);
        setSubCateroy2IdonEdit(undefined);
        notifyupdate(val.data.message);
        handleSubCat2Data();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleDelteSubCategory2 = () => {
    axios
      .delete(api + "admin/subCategory2", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: {
          id: subCat2Id,
          subCategoryId: subCategoryId,
        },
      })
      .then((value) => {
        setDeleteModal(false);
        notify1(value.data.message);
        handleSubCat2Data();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(api + "admin/getCategoryForSubCategory", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setCategory(res.data.category);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    async function handleSubCat1Data() {
      axios
        .get(api + `admin/getSubCategoryForSubCategory2/${categoryId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          setSubCatForSub2List(res.data.subCategory);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    handleSubCat1Data();
  }, [categoryId]);

  const handleSubCat2Data = () => {
    axios
      .get(api + `admin/getSubCategory2Data/${subCategoryId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setSub2List(res.data.subCategory.subCategory2);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleSubCat2Data();
  }, [subCategoryId]);

  return (
    <div className="categoryalign">
      <div className="sidefix">
        <SideBar />
      </div>
      <div className="rightobject">
        <Navbar />
        <div className="addpage">
          <i className="fa-solid fa-arrow-left addcathead"></i>
          <span className="addcathead2">Sub-Categories</span>
          <div className="path">
            Dashboard/Sub-Categories/Sub-Category 2/
            <span>Sub-Category List</span>
          </div>
          <div className="serviceinputbox">
            <select
              className="selectcategory subselect"
              id="selectitem"
              onChange={handleCategoryID}
            >
              <option selected disabled>
                Choose Category
              </option>
              {category.map((item, index) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>

            <select
              className="selectcategory subselect2"
              id="selectitem"
              onChange={handleSubCategoryID}
              onClick={handleSubCat2Data}
            >
              <option selected disabled>
                Choose Sub-Category
              </option>
              {subCatForSub2List.map((item, index) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>

            <table className="servicelisttable">
              <tr className="rowone">
                <td>S.no.</td>
                <td>Sub-Category2 Name</td>
                <td>Sub-Category2 Image</td>
                <td>Created/Updated At</td>
                <td>Action</td>
              </tr>
              {sub2List.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    {subCateroy2IdonEdit === item._id ? (
                      <td id="categorynameid">
                        <ContentEditable
                          html={editValue}
                          onChange={handleEditValue}
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
                      {subCateroy2IdonEdit === item._id ? (
                        <>
                          <i
                            className="fa-sharp fa-solid fa-square-check"
                            onClick={() => handleEditAPI(item._id)}
                          ></i>
                          <i
                            className="fa-solid fa-rectangle-xmark"
                            onClick={handleCancel}
                          ></i>
                        </>
                      ) : (
                        <>
                          <i
                            className="fa-solid fa-pen-to-square edit"
                            onClick={() => handleEditSubCat2(item)}
                          ></i>
                          <i
                            className="fa-solid fa-trash delete"
                            id={item._id}
                            onClick={handleSubCat2ID}
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
        data={deleteModal}
        openModal={setDeleteModal}
        CatDelete={handleDelteSubCategory2}
      />

      <ImageModal data={imageModal} openModal={setImageModal} />

      <ToastContainer />
    </div>
  );
}
