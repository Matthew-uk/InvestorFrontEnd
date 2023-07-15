import React from "react";
import "./paymentDescription.css";

const PaymentDescriptionTest = () => {
  return (
    <div className="paymentDescriptionTest">
      <div className="paymentDescriptionTestContainer">
        <div className="paymentDescriptionTestNavigation">
          <img style={{ cursor: "pointer" }} src="/arrow1.svg" alt="" />
          <h3>Safe Transfer</h3>
        </div>
        <div className="paymentDescriptionTestDescription">
          <h2>Payment Description</h2>
          <p>Enter your payment description</p>
        </div>
        <div className="paymentDescriptionTestInput">
          <input type="text" />
        </div>
        <div className="paymentDescriptionTestButton">
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDescriptionTest;
