import React from "react";
import "./settings.css";
import ProfilePic from "./../../img/profile.jpg";

const SettingsTest = () => {
  return (
    <div className="settingsSection">
      <div className="settingsSectionContainer">
        <div className="settingsSectionNavigation">
          <div className="back">
            <img
              style={{ cursor: "pointer" }}
              src="/arrow1.svg"
              alt="Arrow--->"
            />
          </div>
          <div className="title">Settings</div>
          <div className="menu">
            <img
              style={{ cursor: "pointer" }}
              src="/moreiconbutton.svg"
              alt=""
            />
          </div>
        </div>
        <div className="settingsSectionBody">
          <div className="settingsSectionBodyProfile">
            <div className="img">
              <center>
                <img src={ProfilePic} alt="" />
              </center>
            </div>
            <div className="details">
              <h3>Alex Dordan</h3>
              <p>Web Developer</p>
            </div>
          </div>
          <div className="settingsSectionBodyFunctions">
            <div className="card">
              <img style={{ cursor: "pointer" }} src="/icon4.svg" alt="" />
              <h3>Change Password</h3>
              <img style={{ cursor: "pointer" }} src="/arrow.svg" alt="" />
            </div>
            <div className="card">
              <img style={{ cursor: "pointer" }} src="/icon3.svg" alt="" />
              <h3>Notification</h3>
              <div className="notification-switch">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div className="card">
              <img style={{ cursor: "pointer" }} src="/icon2.svg" alt="" />
              <h3>Invite Friends & Business</h3>
              <img style={{ cursor: "pointer" }} src="/arrow.svg" alt="" />
            </div>
            <div className="card">
              <img style={{ cursor: "pointer" }} src="/icon1.svg" alt="" />
              <h3>Privacy & Policy</h3>
              <img style={{ cursor: "pointer" }} src="/arrow.svg" alt="" />
            </div>
            <div className="line"></div>
            <div className="card">
              <img style={{ cursor: "pointer" }} src="/icon.svg" alt="" />
              <h3>Terms & Conditions</h3>
              <img style={{ cursor: "pointer" }} src="/arrow.svg" alt="" />
            </div>
          </div>
          <div className="settingSectonBodyButton">
            <button>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTest;
