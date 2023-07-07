import styles from "./ForgotPassword.module.css";
const ForgotPassword = () => {
  return (
    <div className={styles.forgotPassword}>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.sendEmail}>Send Email</div>
        </div>
        <div className={styles.email}>
          <div className={styles.emailChild} />
          <div className={styles.xyzgmailcom}>xyz@gmail.com</div>
        </div>
        <div className={styles.pleaseEnterYourContainer}>
          <p className={styles.pleaseEnterYour}>
            Please enter your email address to
          </p>
          <p className={styles.pleaseEnterYour}>
            <span>{`receive a `}</span>
            <span className={styles.verificationCode}>verification code.</span>
          </p>
        </div>
        <div className={styles.forgetPassword}>Forget Password</div>
      </div>
      <img
        className={styles.illustrationIcon}
        alt=""
        src="/illustration2.svg"
      />
      <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
    </div>
  );
};

export default ForgotPassword;
