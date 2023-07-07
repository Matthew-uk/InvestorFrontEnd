import styles from "./VerifyEmail.module.css";
const VerifyEmail = () => {
  return (
    <div className={styles.verifyEmail}>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.verifyCode}>Verify Code</div>
      </div>
      <div className={styles.elmentParent}>
        <img className={styles.elmentIcon} alt="" src="/elment.svg" />
        <div className={styles.text}>
          <div className={styles.resendCode}>Resend Code</div>
        </div>
        <div className={styles.code}>
          <div className={styles.div}>
            <div className={styles.child} />
            <div className={styles.div1}>8</div>
          </div>
          <div className={styles.div2}>
            <div className={styles.child} />
            <div className={styles.div1}>3</div>
          </div>
          <div className={styles.div4}>
            <div className={styles.child} />
            <div className={styles.div1}>0</div>
          </div>
          <div className={styles.div6}>
            <div className={styles.child} />
            <div className={styles.div1}>5</div>
          </div>
        </div>
        <div className={styles.pleaseEnter4Container}>
          <p className={styles.pleaseEnter4}>
            Please enter 4 digit code sent to
          </p>
          <p className={styles.xyzgmailcom}>xyz@gmail.com</p>
        </div>
        <div className={styles.verifyYourEmail}>Verify Your Email</div>
      </div>
      <img
        className={styles.illustrationIcon}
        alt=""
        src="/illustration3.svg"
      />
      <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
    </div>
  );
};

export default VerifyEmail;
