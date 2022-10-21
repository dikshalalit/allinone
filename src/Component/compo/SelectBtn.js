import React from "react";
import "./SelectBtn.css";

export default function SelectBtn(props) {
  const handleCategoryId = (e) => {
    props.change(e.target.value);
  };

  return (
    <div>
      <select className="selectbtn" onChange={handleCategoryId}>
        <option selected disabled>
          {props.des}
        </option>
        {props.data &&
          props.data.map((item) => (
            <option value={item._id}>{item.name}</option>
          ))}
      </select>
    </div>
  );
}
