import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const HomeLearningAd = () => {
  return (
    <div className={styles.learnContainer}>
      <div className={styles.learnHead}>
        <h3 className={styles.subTitle}>Some Courses to consider</h3>
        <p>I give you the cliff notes. Learn with these resources.</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.learnCard}>
          <a href='https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'>
            <Image
              className={styles.homeImage}
              src='https://dev3027public.s3.amazonaws.com/12712530.png'
              alt='pic'
              width={60}
              height={60}
            />
            <h2>A Cloud Guru</h2>
            <p>
              Amazing updated course that gives information and tips specific to
              the exam.
            </p>
          </a>
        </div>
        <div className={styles.learnCard}>
          <a href='https://www.udemy.com'>
            <Image
              className={styles.homeImage}
              src='https://dev3027public.s3.amazonaws.com/udemy.png'
              alt='pic'
              width={60}
              height={60}
            />
            <h2>udemy.com</h2>
            <p>
              Find several high rated courses that teach you and focus on the
              exam
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeLearningAd;
