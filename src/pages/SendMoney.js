import styles from "./SendMoney.module.css";
const SendMoney = () => {
  return (
    <div className={styles.sendMoney}>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.sendMoney1}>{`Send Money  `}</div>
      </div>
      <div className={styles.title}>
        <img
          className={styles.moreiconbutton}
          alt=""
          src="/moreiconbutton.svg"
        />
        <div className={styles.tile}>
          <div className={styles.sendMoney2}>Send Money</div>
        </div>
        <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
      </div>
      <div className={styles.mastercardParent}>
        <div className={styles.mastercard}>
          <div className={styles.bg}>
            <div className={styles.bgChild} />
          </div>
          <img className={styles.cardIcon} alt="" src="/card-icon.svg" />
          <img className={styles.arrowIcon1} alt="" src="/arrow2.svg" />
          <div className={styles.wrapper}>
            <div className={styles.div}>5093 4690 4039 5534</div>
          </div>
          <div className={styles.name}>
            <div className={styles.webDeveloper}>MasterCard</div>
          </div>
        </div>
        <div className={styles.bgParent}>
          <div className={styles.bg}>
            <div className={styles.bgChild} />
          </div>
          <div className={styles.editParent}>
            <img className={styles.editIcon} alt="" src="/edit.svg" />
            <div className={styles.titleParent}>
              <div className={styles.title1}>
                <div className={styles.webDeveloper}>Web Developer</div>
              </div>
              <div className={styles.name1}>
                <div className={styles.webDeveloper}>Alex Dordan</div>
              </div>
            </div>
            <img
              className={styles.groupChild}
              alt=""
              src="/ellipse-311@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
