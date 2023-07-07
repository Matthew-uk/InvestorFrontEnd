import styles from "./SignUpPage.module.css";
const SignUpPage = () => {
  return (
    <div className={styles.signUpPage}>
      <div className={styles.alreadyHaveAnAccountSignParent}>
        <div className={styles.alreadyHaveAn}>Already have an account?</div>
        <div className={styles.alreadyHaveAn1}>Sign In</div>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.login}>Login</div>
      </div>
      <div className={styles.loginsignUp}>
        <div className={styles.signUp}>
          <div className={styles.signUpChild} />
          <div className={styles.signUp1}>Sign Up</div>
        </div>
        <div className={styles.login1}>Login</div>
      </div>
      <div className={styles.countryParent}>
        <div className={styles.country}>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
            <div className={styles.unitedEstate}>United States</div>
          </div>
          <div className={styles.countryregion}>Country/Region</div>
        </div>
        <div className={styles.date}>
          <div className={styles.lineGroup}>
            <div className={styles.frameItem} />
            <img className={styles.vectorIcon1} alt="" src="/vector8.svg" />
            <div className={styles.jan1998}>20 - Jan - 1998</div>
          </div>
          <div className={styles.dateOfBirth}>Date Of Birth</div>
        </div>
        <div className={styles.name}>
          <div className={styles.name1}>Name</div>
          <div className={styles.frame210edittext}>
            <div className={styles.frame210edittextChild} />
            <img className={styles.vectorIcon2} alt="" src="/vector9.svg" />
            <div className={styles.dmitryPonomarev}>{`Dmitry Ponomarev `}</div>
          </div>
        </div>
        <div className={styles.email}>
          <div className={styles.email1}>Email</div>
          <div className={styles.frame210edittext}>
            <div className={styles.frame210edittextChild} />
            <div className={styles.xyzgmailcom}>xyz@gmail.com</div>
          </div>
        </div>
        <div className={styles.phone}>
          <div className={styles.phone1}>Phone</div>
          <div className={styles.frame210edittext}>
            <div className={styles.frame210edittextChild} />
            <div className={styles.div}>+1-123-456-7890</div>
          </div>
        </div>
        <div className={styles.password}>
          <div className={styles.password1}>Password</div>
          <div className={styles.frame213edittext}>
            <div className={styles.frame213edittextChild} />
            <img className={styles.vectorIcon3} alt="" />
            <div className={styles.div1}>xyz123</div>
          </div>
        </div>
        <div className={styles.confirmPassword}>
          <div className={styles.password2}>Confirm Password</div>
          <div className={styles.frame213edittext}>
            <div className={styles.frame213edittextChild} />
            <img className={styles.vectorIcon3} alt="" />
            <div className={styles.div1}>xyz123</div>
          </div>
        </div>
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
    </div>
  );
};

export default SignUpPage;
