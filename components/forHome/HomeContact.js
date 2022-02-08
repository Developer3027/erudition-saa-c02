import React from 'react';
import ContactForm from '../ContactForm';

import styles from '../../styles/Contact.module.css';

const HomeContact = () => {
  return (
    <div className={styles.mainContactContainer}>
      <div className={styles.mainContactWrap}>
        <div className={styles.mainContactBox}>
          <h3 className={styles.mainContactHead}>Contact Form</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
