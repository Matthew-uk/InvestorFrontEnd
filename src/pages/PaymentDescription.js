import styles from "./PaymentDescription.module.css";
const PaymentDescription = () => {
  return (
    <div className={styles.paymentDescription}>
      <div className={styles.bankToBankParent}>
        <b className={styles.bankToBank}>Safe Transfer</b>
        <img
          className={styles.iconlylightOutlinearrowL}
          alt=""
          src="/iconlylightoutlinearrow--left.svg"
        />
      </div>
      <div className={styles.ammount}>
        <div className={styles.ammountChild} />
      </div>
      <div className={styles.btn}>
        <div className={styles.background} />
        <b className={styles.continue}>Continue</b>
      </div>
      <b className={styles.enterTheAmmount}>Payment Description</b>
      <div className={styles.enterAmmountYou}>
        Enter your payment description
      </div>
    </div>
  );
};

export default PaymentDescription;
