import styles from './RecommendedPage.module.sass';
import CONSTANTS from '../../constants';

const { STATIC_IMAGES_PATH } = CONSTANTS;

function RecommendedPage () {
  return (
    <section className={styles.recommendedPageContainer}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Recommended For You</h1>
        <p className={styles.titleText}>
          Personalized recommendations based upon your browsing behavior
        </p>
      </div>
      <div className={styles.imgWrapper}>
        <img
          src={`${STATIC_IMAGES_PATH}/home/wave36.png`}
          alt='imgElement'
          className={styles.imgElement}
        />
      </div>
      <div className={styles.moreElWrapper}>
        <h3>Need More Recommendations</h3>
        <p>Two options to find an awesome name</p>
      </div>
      <article className={styles.cardWrapper}>
        <div className={styles.card}>
          <img
            src={`${STATIC_IMAGES_PATH}/home/mn-icon1.svg`}
            alt='icon'
            className={styles.icon}
          />
          <h4>Name For Sale</h4>
          <p>
            Explore curated collection of premium brand names for sale with a
            matching URL.
          </p>
          <button className={styles.linkBtn}>
            <a href='#'>View All Names For Sale</a>
          </button>
        </div>
        <div className={styles.card}>
          <img
            src={`${STATIC_IMAGES_PATH}/home/mn-icon2.svg`}
            alt='icon'
            className={styles.icon}
          />
          <h4>Launch A Competition</h4>
          <p>
            Get custom name ideas from hundreds of naming experts in real time
          </p>
          <button className={styles.linkBtn}>
            <a href='#'>See How It Works</a>
          </button>
        </div>
      </article>
    </section>
  );
}

export default RecommendedPage;
