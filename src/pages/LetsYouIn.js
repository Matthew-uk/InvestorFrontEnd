import styles from "./LetsYouIn.module.css";
const LetsYouIn = () => {
  return (
    <div className={styles.letsYouIn}>
      <b className={styles.letsYouInContainer}>
        <span className={styles.letsYouInContainer1}>
          <p className={styles.create}>Create</p>
          <p className={styles.create}>Transaction!</p>
        </span>
      </b>
      <div className={styles.socilaMediaLogin}>
        <img
          className={styles.socilaMediaLoginChild}
          alt=""
          src="/group-177.svg"
        />
        <div className={styles.continueWithFacebook}>
          Continue with Facebook
        </div>
      </div>
      <div className={styles.socilaMediaLogin1}>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.continueWithGoogle}>Continue with Google</div>
      </div>
      <div className={styles.socilaMediaLogin2}>
        <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
        <div className={styles.continueWithApple}>Continue with Apple</div>
      </div>
      <img className={styles.letsYouInChild} alt="" src="/group-16.svg" />
      <div className={styles.button}>
        <b className={styles.signInWith}>Trust Firm Transfer</b>
      </div>
    </div>
  );
};

export default LetsYouIn;
