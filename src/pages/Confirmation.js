import styles from "./Confirmation.module.css";
const Confirmation = () => {
  return (
    <div className={styles.confirmation}>
      <div className={styles.button}>
        <div className={styles.backHome}>Back Home</div>
      </div>
      <div className={styles.button1}>
        <div className={styles.buttonChild} />
        <div className={styles.backHome1}>Back Home</div>
      </div>
      <div className={styles.illustrationParent}>
        <img
          className={styles.illustrationIcon}
          alt=""
          src="/illustration.svg"
        />
        <div className={styles.title}>
          <div className={styles.confirmation1}>Confirmation!!</div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
