import styles from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.alreadyHaveAnAccountSignParent}>
        <div className={styles.alreadyHaveAn}>Don’t have an account?</div>
        <div className={styles.alreadyHaveAn1}>Sign Up</div>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.login}>Login</div>
      </div>
      <div className={styles.remeberMeForget}>Forget password?</div>
      <div className={styles.remeberMeForgetPasswordParent}>
        <div className={styles.remeberMeForget1}>Remember me</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.loginsignUp}>
        <div className={styles.signUp}>Sign Up</div>
        <div className={styles.login1}>
          <div className={styles.loginChild} />
          <div className={styles.login2}>Login</div>
        </div>
      </div>
      <img
        className={styles.illustrationIcon}
        alt=""
        src="/illustration1.svg"
      />
      <div className={styles.form}>
        <div className={styles.email}>
          <div className={styles.frame208Edittext}>
            <div className={styles.frame208EdittextChild} />
            <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
            <div className={styles.xyzgmailcom}>xyz@gmail.com</div>
          </div>
          <div className={styles.email1}>Email</div>
        </div>
        <div className={styles.password}>
          <div className={styles.password1}>Password</div>
          <div className={styles.frame209Edittext}>
            <div className={styles.frame209EdittextChild} />
            <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
            <div className={styles.xyz123}>xyz123</div>
          </div>
        </div>
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
    </div>
  );
};

export default LoginPage;
