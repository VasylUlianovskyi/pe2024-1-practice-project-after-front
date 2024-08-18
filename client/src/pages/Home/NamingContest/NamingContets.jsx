import { Link } from 'react-router-dom';
import sectionLogo from './nh-layer.svg';
import styles from './NamingContest.module.sass';

function NamingContets () {
  return (
    <section className={styles.sectionContainer}>
      <img className={styles.sectionLogo} src={sectionLogo} alt='' />
      <h2 className={styles.sectionHeading}>Atom Naming Contests</h2>
      <p className={styles.sectionsInfo}>
        Custom name suggestions from 100s of naming experts as you are guided
        through our naming agency-style process
      </p>
      <Link to='/startContest' className={styles.startContestLink}>
        Get a Custom Name
      </Link>
    </section>
  );
}

export default NamingContets;
