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
  const [subcategory, setSubCategory] = useState([]);
  const [subcategoryIDonDelete, setSubcategoryIDonDelete] = useState();
  const [deleteModal, setDeleteModal] = useState(false);
  const [subCateroyIdonEdit, setSubCateroyIdonEdit] = useState("");
  const [editValue, setEditValue] = useState("");
  const [imageModal, setImageModal] = useState(false);
  const handleCategoryID = (item) => {
    setCategoryId(item.target.value);
  };

  const handleSubCateid = (item) => {
    setSubcategoryIDonDelete(item.target.id);
    setDeleteModal(true);
  };

  const notify2 = (message) => toast(message);

  const notify3 = (message) => toast(message);

  const handleEditSubCat = (item) => {
    setSubCateroyIdonEdit(item._id);
    setEditValue(item.name);
  };

  const handleEditValue = (e) => {
    setEditValue(e.target.value);
  };

  const handleCancel = () => {
    setSubCateroyIdonEdit(undefined);
  };

  const handleSubcategories = () => {
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
  };

  useEffect(() => {
    handleSubcategories();
  }, []);

  const handleSubCat = () => {
    axios
      .get(api + `admin/getSubCategoryData/${categoryId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data.category[0].subCategory);
        setSubCategory(res.data.category[0].subCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleSubCat();
  }, [categoryId]);

  const handleDeleteSubCategory = () => {
    axios
      .delete(api + "admin/subCategory", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: {
          id: subcategoryIDonDelete,
          categoryId: categoryId,
        },
      })
      .then((value) => {
        setDeleteModal(false);
        notify2(value.data.message);
        handleSubcategories();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditAPI = async (id) => {
    console.log(editValue, id);
    axios
      .put(
        api + "admin/subCategory",
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
        setSubCateroyIdonEdit(undefined);
        handleSubCat();

        notify3(val.data.message);
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
          <span className="addcathead2">Sub-Categories</span>
          <div className="path">
            Dashboard/Sub-Categories/Sub-Category 1/
            <span>Sub-Category List</span>
          </div>
          <div className="serviceinputbox">
            <select
              className="selectcategory subselect"
              id="selectitem"
              onChange={handleCategoryID}
              onClick={handleSubCat}
            >
              <option selected disabled>
                Choose Category
              </option>
              {category.map((item, index) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>

            <table className="servicelisttable">
              <tr className="rowone">
                <td>S.no.</td>
                <td>Sub-Category Name</td>
                <td>Sub-Category Image</td>
                <td>Created/Updated At</td>
                <td>Action</td>
              </tr>

              {subcategory.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    {subCateroyIdonEdit === item._id ? (
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
                      {subCateroyIdonEdit === item._id ? (
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
                            onClick={() => handleEditSubCat(item)}
                          ></i>
                          <i
                            className="fa-solid fa-trash delete"
                            id={item._id}
                            onClick={handleSubCateid}
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
        CatDelete={handleDeleteSubCategory}
      />

      <ImageModal data={imageModal} openModal={setImageModal} />

      <ToastContainer />
    </div>
  );
}
