import styles from "./Notification1.module.css";
const Notification1 = () => {
  return (
    <div className={styles.notification}>
      <div className={styles.frame224listParent}>
        <div className={styles.frame224list}>
          <div className={styles.bgParent}>
            <div className={styles.bg}>
              <div className={styles.bgChild} />
            </div>
            <img className={styles.dotsradioIcon} alt="" src="/dotsradio.svg" />
            <div className={styles.unitedKingdom}>United Kingdom</div>
          </div>
          <div className={styles.bgParent}>
            <div className={styles.bg}>
              <div className={styles.bgChild} />
            </div>
            <img className={styles.dotsradioIcon} alt="" src="/dotsradio.svg" />
            <div className={styles.germany}>{`Germany `}</div>
          </div>
          <div className={styles.bgParent}>
            <div className={styles.bg}>
              <div className={styles.bgChild} />
            </div>
            <img className={styles.dotsradioIcon} alt="" src="/dotsradio.svg" />
            <div className={styles.france}>{`France `}</div>
          </div>
          <div className={styles.bgParent}>
            <div className={styles.bg}>
              <div className={styles.bgChild} />
            </div>
            <img className={styles.dotsradioIcon} alt="" src="/dotsradio.svg" />
            <div className={styles.france}>Italy</div>
          </div>
          <div className={styles.bgParent}>
            <div className={styles.bg}>
              <div className={styles.bgChild} />
            </div>
            <img className={styles.dotsradioIcon} alt="" src="/dotsradio.svg" />
            <div className={styles.portugal}>{`Portugal `}</div>
          </div>
          <div className={styles.bgParent}>
            <div className={styles.bg}>
              <div className={styles.bgChild} />
            </div>
            <img className={styles.dotsradioIcon} alt="" src="/dotsradio.svg" />
            <div className={styles.france}>Brazil</div>
          </div>
        </div>
        <div className={styles.countryOrRegion}>Notifications</div>
      </div>
      <div className={styles.bgParent3}>
        <div className={styles.bg6}>
          <div className={styles.bgChild3} />
        </div>
        <div className={styles.text}>
          <div className={styles.searchCountry}>Search Notification...</div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector10.svg" />
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
    </div>
  );
};

export default Notification1;
