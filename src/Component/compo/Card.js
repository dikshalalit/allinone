import React from "react";
import Vendor from "../../Assests/vendor.jpg";

export default function Card(props) {
  return (
    <>
      {props.data &&
        props.data.map((item) => (
          <div className="col-4">
            <div className="card_bg">
              <div className="card_color">
                <img src={Vendor} alt="vendorImage" className="vendorImage" />
                <h6>{item.firstName + " " + item.lastName}</h6>
                <p>{item.email}</p>
              </div>
              <div className="lowerText">
                <div>
                  Gender:<span>Male</span>
                </div>
                <div>
                  Phone:<span>{item.phone}</span>
                </div>
                <div>
                  DOB:<span>{item.DOB.split("T")[0]}</span>
                </div>
                <div>
                  Address:
                  <span>{item.address}</span>
                </div>
                <div>
                  City:<span>{item.city}</span>
                </div>
                <div>
                  Pin:<span>{item.pin}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
