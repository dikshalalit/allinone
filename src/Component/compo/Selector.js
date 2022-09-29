import React, { useState } from "react";
import "./Selector.css";

export default function SubAddCategory(props) {
  document.getElementById("subbtn") &&
    (document.getElementById("subbtn").style.display = "hidden");
  document.getElementById("catbn") &&
    (document.getElementById("catbn").style.display = "hidden");
  console.log(props.sub);
  const condition = (val) => {
    val = JSON.parse(val);
    props.setId(val._id);
    if (val.subcategory.length === 0 && val.services.length === 0) {
      return (
        (document.getElementById("subbtn").style.display = "block"),
        (document.getElementById("catbn").style.display = "block")
      );
    }

    if (val.subcategory.length !== 0) {
      return (
        (document.getElementById("subbtn").style.display = "block"),
        (document.getElementById("catbn").style.display = "none")
      );
    }
    if (val.services.length !== 0) {
      return (
        (document.getElementById("subbtn").style.display = "none"),
        (document.getElementById("catbn").style.display = "block")
      );
    }
  };

  return (
    <div>
      <div>Category Name</div>
      <select
        onChange={(val) => condition(val.target.value)}
        className="selectstyle"
      >
        <option selected="true" disabled="disabled">
          Choose Category
        </option>
        {props.sub.map((item) => {
          return (
            <option value={JSON.stringify(item)}>{item.categoryName}</option>
          );
        })}
      </select>
    </div>
  );
}
