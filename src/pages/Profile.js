import styles from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.button}>
        <div className={styles.bg}>
          <div className={styles.bgChild} />
        </div>
        <div className={styles.text}>
          <div className={styles.logOut}>Log Out</div>
        </div>
        <img className={styles.icon} alt="" src="/icon7.svg" />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.text1}>
                <div className={styles.privacySettings}>Privacy Setting</div>
              </div>
              <div className={styles.icon1}>
                <div className={styles.icon1}>
                  <div className={styles.bgItem} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.groupDiv}>
          <div className={styles.groupFrame}>
            <div className={styles.textGroup}>
              <div className={styles.text2}>
                <div className={styles.notification}>Notification</div>
              </div>
              <div className={styles.icon2}>
                <div className={styles.icon2}>
                  <div className={styles.bgInner} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groupWrapper1}>
            <div className={styles.textContainer}>
              <div className={styles.text3}>
                <div className={styles.personalInfo}>Personal Info</div>
              </div>
              <div className={styles.icon3}>
                <div className={styles.icon3}>
                  <div className={styles.rectangleDiv} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groupWrapper2}>
            <div className={styles.groupWrapper2}>
              <div className={styles.text4}>
                <div className={styles.settings}>Settings</div>
              </div>
              <div className={styles.icon3}>
                <div className={styles.icon3}>
                  <div className={styles.rectangleDiv} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <img
          className={styles.settingsiconbutton}
          alt=""
          src="/settingsiconbutton.svg"
        />
        <div className={styles.tile}>
          <div className={styles.profile1}>Profile</div>
        </div>
        <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
      </div>
      <div className={styles.editParent}>
        <div className={styles.edit}>
          <div className={styles.bg5}>
            <div className={styles.bgChild2} />
          </div>
        </div>
        <div className={styles.titleParent}>
          <div className={styles.title1}>
            <div className={styles.privacySettings}>Web Developer</div>
          </div>
          <div className={styles.name}>
            <div className={styles.privacySettings}>Alex Dordan</div>
          </div>
        </div>
        <img className={styles.groupChild} alt="" src="/group-85.svg" />
      </div>
    </div>
  );
};

export default Profile;
