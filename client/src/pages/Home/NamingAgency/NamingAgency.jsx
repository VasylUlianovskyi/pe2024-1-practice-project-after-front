import styles from './NamingAgency.module.sass';
import cardData from './cardData';

function NamingAgency () {
  const mapCard = ({ icon, title, description }, i) => (
    <li key={i} className={styles.card}>
      <img className={styles.logo} src={icon} alt='icon' />
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardDescription}>{description}</p>
    </li>
  );

  return (
    <section className={styles.namingAgencyWrapper}>
      <div className={styles.namingAgencyTitleWrapper}>
        <h3 className={styles.title}>Like A Naming Agency, But Better</h3>
        <p className={styles.description}>
          With Atom's managed contests, leverage our team's naming expertise and
          our pool of 300K+ naming experts. Our hybrid-solution partners you
          with a trained Atom branding consultant who will guide your
          crowdsourcing process step-by-step to get the best results possible.
        </p>
      </div>
      <ul className={styles.cardWrapper}>{cardData.map(mapCard)}</ul>
      <button className={styles.learnBtn}>
        <a href='#'>Learn More</a>
      </button>
    </section>
  );
}

export default NamingAgency;
