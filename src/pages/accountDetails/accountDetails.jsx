import React from "react";
import "./accountDetails.css";

const AccountDetailsTest = () => {
  return (
    <div className="accountDetailsSection">
      <div className="accountDetailsSectionContainer">
        <div className="accountDetailsSectionNavigation">
          <div className="accountDetailsSectionNavigationImg">&lt;</div>
          <div className="accountDetailsSectionNavigationBody">
            <h2>Account Details</h2>
          </div>
        </div>
        <div className="accountDetailsSectionBody">
          <div className="accountDetailsSectionBodyTop">
            <div className="accountDetailsSectionBodyTopPod Active">Mr.</div>
            <div className="accountDetailsSectionBodyTopPod">Mrs.</div>
            <div className="accountDetailsSectionBodyTopPod">Ms.</div>
          </div>
          <div className="accountDetailsSectionBodyMiddle">
            <div className="accountDetailsSectionBodyMiddlePod">
              Daniel Austin
            </div>
            <div className="accountDetailsSectionBodyMiddlePod">Daniel</div>
            <div className="accountDetailsSectionBodyMiddlePod">12/27/1995</div>
            <div className="accountDetailsSectionBodyMiddlePod">
              user@domain.com
            </div>
            <div className="accountDetailsSectionBodyMiddlePod">
              +1 123 456 789 000
            </div>
          </div>
          <div className="accountDetailsSectionBodyBottom">
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsTest;
