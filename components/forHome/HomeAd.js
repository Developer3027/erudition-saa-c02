import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const HomeAd = () => {
  return (
    <div className={styles.adContainer}>
      <div className={styles.ad}>
        <h2>Give yourself the best chance to pass!</h2>
        <div className={styles.buttonWrap}>
          <a
            className={styles.adButton}
            href='https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
            target='_blank'
            rel='noopener noreferrer'>
            A Cloud Guru
          </a>
          <div className={styles.adButton}>
            <Link href='/saa-prep'>
              <a>Get Started</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAd;
