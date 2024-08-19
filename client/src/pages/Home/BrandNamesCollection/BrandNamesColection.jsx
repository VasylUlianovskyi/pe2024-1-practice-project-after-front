import styles from './BrandNamesColection.module.sass';
import data from './data';

function BrandNamesColection () {
  const mapElement = ({ icon, title, color }, i) => (
    <li className={styles.cardEl} style={{ background: color }} key={i}>
      <img className={styles.icon} src={icon} alt='icon' />
      <p className={styles.cardTitle}>{title}</p>
    </li>
  );

  return (
    <section className={styles.brandNamesWrapper}>
      <div className={styles.brandNamesTitleWrapper}>
        <h3 className={styles.title}>Largest Collection of Brandable Names</h3>
        <p className={styles.description}>
          Explore themed brand name collections created by our experienced team
          of branding experts
        </p>
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.linkBtn}>
          <a href='#'>Top Categories</a>
        </button>
        <button className={styles.linkBtn}>
          <a href='#'>Top Industries</a>
        </button>
        <button className={styles.linkBtn}>
          <a href='#'>Top Ideas</a>
        </button>
      </div>
      <ul className={styles.cardLayout}>{data.map(mapElement)}</ul>
      <button className={styles.linkButton}>
        <a href='#'>View all Categories</a>
      </button>
    </section>
  );
}

export default BrandNamesColection;
