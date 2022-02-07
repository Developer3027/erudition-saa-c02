import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Layout.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrap}>
        <div>
          <a
            href='https://mason-roberts.com'
            target='_blank'
            rel='noopener noreferrer'>
            Powered by <span className={styles.footerLogo}>Developer3027</span>
          </a>
        </div>
        <div className={styles.footerLinks}>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/saa-prep'>
            <a>Cert Prep</a>
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <Link href='/exam-prep'>
            <a>Exam Prep</a>
          </Link>
          <Link href='/donate'>
            <a>Donate</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
