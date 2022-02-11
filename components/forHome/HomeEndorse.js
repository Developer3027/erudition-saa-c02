import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const HomeEndorse = () => {
  return (
    <div className={styles.endorseContainer}>
      <div className={styles.endorseWrap}>
        <div className={styles.endorseImgWrap}>
          <div className={styles.endorseImgBg}>
            <div className={styles.endorseImg}>
              <Image
                src='https://dev3027public.s3.amazonaws.com/MCQvZSEb.webp'
                alt='pic'
                width={240}
                height={362}
                objectFit='contain'
              />
            </div>
          </div>
        </div>
        <div className={styles.endorseHead}>
          <h3 className={styles.endorseSubTitle}>Learn better, together</h3>
          <div className={styles.endorseSecond}>
            <div className={styles.endorseBox}>
              <h3>ACloudGuru</h3>
              <p>The best platform to learn all the big certifications</p>
            </div>
            <div className={styles.endorseLine} />
            <div className={styles.endorseBox}>
              <h3>Premium</h3>
              <p>Combine great community with tools and resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEndorse;
