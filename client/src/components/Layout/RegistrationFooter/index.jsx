import React from 'react';
import styles from './RegistrationFooter.module.sass';
import CONSTANTS from './../../../constants';
import footerData from './footerData.js';

const { TEL } = CONSTANTS.CONTACTS;

const RegistrationFooter = () => {
  const mapFooterItem = ({ title, description }, i) => (
    <div key={i}>
      <div className={styles.headerArticle}>{title}</div>
      <div className={styles.article}>{description}</div>
    </div>
  );

  return (
    <div className={styles.footer}>
      <div className={styles.articlesMainContainer}>
        <div className={styles.ColumnContainer}>
          {footerData.map(mapFooterItem)}
        </div>
        <div className={styles.ColumnContainer}>
          {footerData.map(mapFooterItem)}
          <div className={styles.headerArticle}>
            I have other questions! How can I get in touch with Squadhelp?
          </div>
          <div className={styles.article}>
            Check out our <span className={styles.orangeSpan}>FAQs</span> or
            send us a <span className={styles.orangeSpan}>message</span>. For
            assistance with launching a contest, you can also call us at{' '}
            <a className={styles.tel} href={`tel:${TEL}`}>
              {TEL}{' '}
            </a>
            or schedule a{' '}
            <span className={styles.orangeSpan}>Branding Consultation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFooter;
