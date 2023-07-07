import styles from "./Settings.module.css";
const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.arrowParent}>
            <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            <div className={styles.textParent}>
              <div className={styles.text}>
                <div
                  className={styles.termsConditions}
                >{`Terms & Conditions`}</div>
              </div>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.frameGroup}>
          <div className={styles.arrowGroup}>
            <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            <div className={styles.textGroup}>
              <div className={styles.text1}>
                <div
                  className={styles.termsConditions}
                >{`Privacy & Policy`}</div>
              </div>
              <img className={styles.icon} alt="" src="/icon1.svg" />
            </div>
          </div>
          <div className={styles.arrowContainer}>
            <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            <div className={styles.textContainer}>
              <div className={styles.text2}>
                <div
                  className={styles.termsConditions}
                >{`Invite Friends & Business`}</div>
              </div>
              <img className={styles.icon} alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className={styles.group131switchParent}>
            <div className={styles.group131switch}>
              <div className={styles.group131switchChild} />
              <div className={styles.group131switchItem} />
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.text3}>
                <div className={styles.termsConditions}>Notification</div>
              </div>
              <img className={styles.icon} alt="" src="/icon3.svg" />
            </div>
          </div>
          <div className={styles.arrowParent}>
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            <div className={styles.text4}>
              <div className={styles.termsConditions}>Change Password</div>
            </div>
            <img className={styles.icon} alt="" src="/icon4.svg" />
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.bg}>
          <div className={styles.bgChild} />
        </div>
        <img className={styles.icon5} alt="" src="/icon5.svg" />
        <div className={styles.text5}>
          <div className={styles.logOut}>Log Out</div>
        </div>
      </div>
      <div className={styles.title}>
        <img
          className={styles.moreiconbutton}
          alt=""
          src="/moreiconbutton.svg"
        />
        <div className={styles.tile}>
          <div className={styles.logOut}>Settings</div>
        </div>
        <img className={styles.arrowIcon3} alt="" src="/arrow1.svg" />
        <img className={styles.arrowIcon3} alt="" src="/arrow1.svg" />
        <img className={styles.arrowIcon3} alt="" src="/arrow1.svg" />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.titleParent}>
          <div className={styles.title1}>
            <div className={styles.webDeveloper}>Web Developer</div>
          </div>
          <div className={styles.name}>
            <div className={styles.alexDordan}>Alex Dordan</div>
          </div>
        </div>
        <img className={styles.groupChild} alt="" src="/group-100.svg" />
      </div>
    </div>
  );
};

export default Settings;
