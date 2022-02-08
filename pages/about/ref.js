import React from 'react';
import Link from 'next/link';
import styles from '../../styles/About.module.css';

const Reference = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h1>Site reference and source data</h1>
        <div className={styles.aboutNav}>
          <Link href='/about/goal'>
            <a className={styles.aboutNavLink}>The Goal</a>
          </Link>
          <Link href='/about/ref'>
            <a className={styles.aboutNavLink}>References</a>
          </Link>
        </div>
        <p>Here are links to the resources I used in building the site.</p>
        <div>
          <div>
            <h2>ACloudGuru</h2>
            <a
              href='https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
              target='_blank'
              rel='noopener noreferrer'>
              Notes from certification course at A Cloud Guru
            </a>
          </div>

          <h2>Unsplash</h2>

          <div>
            Photo by{' '}
            <a
              href='https://unsplash.com/@moh_ph?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
              target='_blank'
              rel='noopener noreferrer'>
              Mohammed Hassan
            </a>{' '}
            on{' '}
            <a
              href='https://unsplash.com/s/photos/headshot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
              target='_blank'
              rel='noopener noreferrer'>
              Unsplash
            </a>
          </div>
          <div>
            Photo by{' '}
            <a
              href='https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
              target='_blank'
              rel='noopener noreferrer'>
              Christina @ wocintechchat.com
            </a>{' '}
            on{' '}
            <a
              href='https://unsplash.com/images/people?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
              target='_blank'
              rel='noopener noreferrer'>
              Unsplash
            </a>
          </div>
        </div>

        <div>
          <h2>Dribbble</h2>
          <a
            href='https://dribbble.com/shots/16579190-Macode-Landing-Page-Animation'
            target='_blank'
            rel='noopener noreferrer'>
            Design based loosely on Odama by Azie Melasari found on dribbble
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reference;
