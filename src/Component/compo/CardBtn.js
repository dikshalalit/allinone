import React from "react";
import Vendor from "../../Assests/vendor.jpg";

export default function Cardbtn(props) {
  const handleAcceptId = (item) => {
    props.handleAccpet(item);
    props.handleModalA(true);
  };

  const handleRejectId = (item) => {
    props.handleAccpet(item);
    props.handleModalR(true);
  };
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

              <div className="cardBtn">
                <button
                  className="Acceptbtn"
                  onClick={() => handleAcceptId(item._id)}
                >
                  Accept
                </button>
                <button
                  className="Rejectbtn"
                  onClick={() => handleRejectId(item._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
