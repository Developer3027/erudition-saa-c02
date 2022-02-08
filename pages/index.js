import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import HomeEndorse from '../components/forHome/HomeEndorse';
import HomeFAQ from '../components/forHome/HomeFAQ';
import HomeAd from '../components/forHome/HomeAd';
import HomeLearningAd from '../components/forHome/HomeLearningAd';
import HomeDonate from '../components/forHome/HomeDonate';
import HomeContact from '../components/forHome/HomeContact';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Erudition SAA-C02</title>
        <meta
          name='description'
          content='Cliff Notes for the Solution Architect Associate Certification course on A Cloud Guru. Brush up on the information required to pass the SAA-C02 Exam. Presented by Developer 3027, Mason Roberts.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.divide}>
          <div className={styles.homeLeft}>
            <div className={styles.homeWrap}>
              <h3 className={styles.subTitle}>
                <a href='https://mason-roberts.com'>Developer3027 presents</a>
              </h3>
              <h1 className={styles.title}>
                AWS Solutions Architect Associate
              </h1>
              <h2 className={styles.cert}>SAA-CO2</h2>
            </div>

            <div className={styles.hero}>
              <h3>Improve your chances of passing the SAA-C02</h3>
              <p className={styles.heroWidth}>
                Think of this as cliff notes to the a cloud guru certification
                course for the AWS Solution Architect Associate. I recommend you
                take that course and review this site as cliff notes.
              </p>
              <p className={styles.heroWidth}>
                Use it with the{' '}
                <a href='https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'>
                  ACloudGuru
                </a>{' '}
                course to prepare for the exam or to keep fresh on AWS Services.
                Thank you for your support!
              </p>
            </div>

            <div className={styles.grid}>
              <Link href='/saa-prep'>
                <a className={styles.card}>
                  <h2>Cert Prep</h2>
                  <p>Start your journey to getting certified today.</p>
                </a>
              </Link>

              <Link href='/exam-prep'>
                <a className={styles.card}>
                  <h2>Exam Practice</h2>
                  <p>Ready for the exam? Polish your knowledge.</p>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.homeRight}>
            <div className={styles.imgBox}>
              <Image
                src='https://dev3027public.s3.amazonaws.com/0Zx1bDv5BNY.webp'
                alt='pic'
                width={480}
                height={719}
              />
            </div>
            <div className={styles.badge}>
              <HiOutlineAcademicCap />
              <span className={styles.badgeFont}>
                Solution Architect Associate
              </span>
            </div>
          </div>
        </div>
        <HomeEndorse />
        <HomeLearningAd />
        <HomeFAQ />
        <HomeDonate />
        <HomeAd />
        <HomeContact />
      </main>
    </div>
  );
}
