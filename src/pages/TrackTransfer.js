import styles from "./TrackTransfer.module.css";
const TrackTransfer = () => {
  return (
    <div className={styles.tracktransfer}>
      <div className={styles.title}>
        <img
          className={styles.moreiconbutton}
          alt=""
          src="/moreiconbutton.svg"
        />
        <div className={styles.tile}>
          <div className={styles.sendMoney}>Track Transfer</div>
        </div>
        <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
      </div>
      <div className={styles.div}>
        <div className={styles.switchOff}>
          <div className={styles.switchOffChild} />
          <div className={styles.switchOffItem} />
        </div>
        <div className={styles.text}>
          <b className={styles.discountsSales}>Transfer Status</b>
        </div>
      </div>
      <div className={styles.div1}>
        <div className={styles.switchOff1}>
          <div className={styles.switchOffInner} />
          <div className={styles.ellipseDiv} />
        </div>
        <div className={styles.text1}>
          <b className={styles.discountsSales1}>Transfer Status</b>
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.switchOff2}>
          <div className={styles.rectangleDiv} />
          <img className={styles.nobIcon} alt="" src="/nob.svg" />
        </div>
        <div className={styles.text2}>
          <b className={styles.discountsSales2}>Transfer Status</b>
        </div>
      </div>
      <div className={styles.div3}>
        <div className={styles.switchOff3}>
          <div className={styles.switchOffChild1} />
          <img className={styles.nobIcon1} alt="" src="/nob1.svg" />
        </div>
        <div className={styles.text3}>
          <b className={styles.discountsSales3}>Transfer Status</b>
        </div>
      </div>
    </div>
  );
};

export default TrackTransfer;
