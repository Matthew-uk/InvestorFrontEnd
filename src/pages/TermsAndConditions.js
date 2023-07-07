import styles from "./TermsAndConditions.module.css";
const TermsAndConditions = () => {
  return (
    <div className={styles.termsandconditions}>
      <div className={styles.loremIpsumContainer}>
        <p className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fermentum netus amet risus commodo amet vulputate tellus. Et quis
          ornare sed diam in. Id nibh mattis quis fermentum non malesuada. Vel
          ullamcorper lacus, mollis pellentesque egestas aliquet aliquam. Risus
          lorem velit, nunc id ornare diam. Odio diam egestas vulputate
          tristique mi aliquam eget. Feugiat mi sed semper faucibus tellus
          aliquam nulla ullamcorper arcu. Est in risus pulvinar arcu pretium dui
          eget pretium. Nunc, sed scelerisque id varius.
        </p>
        <p
          className={styles.loremIpsumDolor}
        >{`Vulputate vel aliquam suscipit vitae, nullam pretium. Ut sed elementum eget id pellentesque. Odio placerat faucibus purus rhoncus, pharetra commodo. Augue a duis vitae tempor lobortis. Aliquam nunc amet fermentum, aliquet elementum ac neque, convallis. Fames nulla ornare diam odio enim. Enim, pellentesque `}</p>
      </div>
      <div className={styles.termsAndConditions}>Terms and Conditions</div>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.backHome}>Accept</div>
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
    </div>
  );
};

export default TermsAndConditions;
