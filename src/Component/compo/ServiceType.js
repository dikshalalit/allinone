import React from "react";
import "../../Style/Category.css";

export default function ServiceType(props) {
  return (
    <div>
      <div className="headbox" style={{ backgroundColor: props.color }}>
        <center>{props.name}</center>
      </div>
      <div className="SGPbox">
        <table>
          <tr>
            <th>Description</th>
            <td>
              <input
                type="text"
                className="desptype"
                onChange={props.desp}
                value={props.Udesp}
              />
            </td>
          </tr>
          <tr>
            <th>Price</th>
            <td>
              <input
                type="Number"
                onChange={props.price}
                value={props.Uprice}
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
