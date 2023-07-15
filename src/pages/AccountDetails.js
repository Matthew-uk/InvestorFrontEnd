import styles from "./AccountDetails.module.css";
const AccountDetails = () => {
  return (
    <div className={styles.accountDetails}>
      <div className={styles.accountDetailsContainer}>
        <div className={styles.sizemediumTypefilledIconParent}>
          <div className={styles.sizemediumTypefilledIcon}>
            <div className={styles.chips}>Mr.</div>
          </div>
          <div className={styles.sizemediumTypeborderIcon}>
            <div className={styles.chips1}>Mrs.</div>
          </div>
          <div className={styles.sizemediumTypeborderIcon1}>
            <div className={styles.chips2}>Ms.</div>
          </div>
        </div>
        <div className={styles.statusfillTypedefaultStaParent}>
          <div className={styles.statusfillTypedefaultSta}>
            <div className={styles.label}>Daniel Austin</div>
          </div>
          <div className={styles.statusfillTypedefaultSta1}>
            <div className={styles.label}>Daniel</div>
          </div>
          <div className={styles.dateedittext}>
            <img
              className={styles.iconlyboldprofile}
              alt=""
              src="/iconlyboldprofile.svg"
            />
            <div className={styles.label2}>12/27/1995</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.inputEdittext}>
            <img
              className={styles.iconlyboldprofile}
              alt=""
              src="/iconlyboldprofile.svg"
            />
            <div className={styles.label2}>user@domain.com</div>
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.phoneedittext}>
            <img
              className={styles.autoLayoutHorizontal}
              alt=""
              src="/auto-layout-horizontal.svg"
            />
            <div className={styles.labelWrapper}>
              <div className={styles.label4}>+1 123 456 789 000</div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <b className={styles.continue}>Continue</b>
        </div>
        <div className={styles.navigationBar}>
          <img
            className={styles.iconlylightOutlinearrowL}
            alt=""
            src="/iconlylightoutlinearrow--left.svg"
          />
          <b className={styles.nameOfReservation}>Account Details</b>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
