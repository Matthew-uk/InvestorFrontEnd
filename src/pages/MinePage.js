import styles from "./MinePage.module.css";
const MinePage = () => {
  return (
    <div className={styles.minePage}>
      <div className={styles.recentTransfer}>
        <div className={styles.parent}>
          <div className={styles.div}>-$27.00</div>
          <div className={styles.groupParent}>
            <div className={styles.dateParent}>
              <div className={styles.date}>
                <div className={styles.june2022}>18 June, 2022</div>
              </div>
              <div className={styles.linkedin}>LinkedIn</div>
            </div>
            <div className={styles.icon}>
              <div className={styles.iconChild} />
              <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
            </div>
          </div>
        </div>
        <div className={styles.behance}>
          <div className={styles.div}>-$27.00</div>
          <div className={styles.groupContainer}>
            <div className={styles.dateParent}>
              <div className={styles.june20221}>18 June, 2022</div>
              <div className={styles.linkedin}>Behance</div>
            </div>
            <div className={styles.icon1}>
              <div className={styles.iconItem} />
              <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
            </div>
          </div>
        </div>
        <div className={styles.dribbble}>
          <div className={styles.div2}>-$107.00</div>
          <div className={styles.groupDiv}>
            <div className={styles.dateParent}>
              <div className={styles.june20221}>18 June, 2022</div>
              <div className={styles.linkedin}>Dribbble</div>
            </div>
            <div className={styles.icon2}>
              <div className={styles.iconInner} />
            </div>
          </div>
        </div>
        <div className={styles.spotify}>
          <div className={styles.div3}>-$54.00</div>
          <div className={styles.groupParent1}>
            <div className={styles.june2022Container}>
              <div className={styles.june20221}>20 June, 2022</div>
              <div className={styles.linkedin}>Spotify</div>
            </div>
            <div className={styles.icon2}>
              <div className={styles.rectangleDiv} />
              <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.netfilix}>
          <div className={styles.div2}>-$170.00</div>
          <div className={styles.groupParent1}>
            <div className={styles.june2022Container}>
              <div className={styles.june20221}>20 June, 2022</div>
              <div className={styles.linkedin}>Netflix</div>
            </div>
            <div className={styles.icon2}>
              <div className={styles.iconChild1} />
            </div>
          </div>
        </div>
        <div className={styles.appleStore}>
          <div className={styles.div5}>-$220.00</div>
          <div className={styles.groupParent3}>
            <div className={styles.june2022Parent2}>
              <div className={styles.june20221}>21 June, 2022</div>
              <div className={styles.linkedin}>Apple Store</div>
            </div>
            <div className={styles.icon2}>
              <div className={styles.iconChild2} />
            </div>
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.seeAll}>See All</div>
          <div className={styles.recentTransfer1}>Recent Transfer</div>
        </div>
      </div>
      <img className={styles.moreIcon} alt="" src="/more.svg" />
      <div className={styles.request}>
        <div className={styles.bg} />
        <div className={styles.textGroup}>
          <img
            className={styles.frame243imageIcon}
            alt=""
            src="/frame-243image.svg"
          />
          <div className={styles.request1}>Request</div>
        </div>
      </div>
      <div className={styles.transfer}>
        <div className={styles.bg1} />
        <div className={styles.textGroup}>
          <img
            className={styles.frame242imageIcon}
            alt=""
            src="/frame-244image.svg"
          />
          <div className={styles.request1}>Transfer</div>
        </div>
      </div>
      <div className={styles.title1}>
        <div className={styles.helloAlexWelcomeContainer}>
          <p className={styles.helloAlex}>Hello Alex</p>
          <p className={styles.welcomeBack}>Welcome back!</p>
        </div>
        <img className={styles.titleChild} alt="" src="/ellipse-308@2x.png" />
      </div>
    </div>
  );
};

export default MinePage;
