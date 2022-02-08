import React, { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

import styles from '../../styles/Home.module.css';

const HomeFAQ = () => {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showFive, setShowFive] = useState(false);

  const closeAll = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(false);
    setShowFour(false);
    setShowFive(false);
  }

  return (
    <div className={styles.faqContainer}>
      <h2>FAQ&apos;S</h2>
      <div className={styles.faqBox}>
        <div className={styles.faqWrap}>
          <p className={styles.faqQuestion}>
            <span onClick={() => {closeAll(); setShowOne(!showOne);}}>
              <HiOutlineChevronDown className={styles.faqIcon} />
            </span>
            How does the site work?
          </p>
          <div id={showOne ? 'showFaq' : 'hideFaq'} className={styles.faqAnswer}>
            <p>
              The site is all free to use. You can access the exam practice
              questions directly. You can access the cert prep notes after
              taking a quiz. The quiz helps you gain an understanding of where
              you may need to focus. I do use Stripe to accept donations, so if
              you enjoy the site, if it helps you, if you want to help this
              project, your support is greatly appreciated!
            </p>
          </div>
        </div>

        <div className={styles.faqWrap}>
          <p className={styles.faqQuestion}>
            <span onClick={() => {closeAll(); setShowTwo(!showTwo)}}>
              <HiOutlineChevronDown className={styles.faqIcon} />
            </span>
            Are the practice exam questions like the actual exam?
          </p>
          <div id={showTwo ? 'showFaq' : 'hideFaq'} className={styles.faqAnswer}>
            <p>
              Yes! I have pulled from two pools of questions to provide these to
              you. They are up to date, mimic those on the exam, and test your
              knowledge required to pass the exam. However, there is no time
              limit.
            </p>
          </div>
        </div>

        <div className={styles.faqWrap}>
          <p className={styles.faqQuestion}>
            <span onClick={() => {closeAll(); setShowThree(!showThree)}}>
              <HiOutlineChevronDown className={styles.faqIcon} />
            </span>
            What is the purpose of the quiz to access the Cert Prep?
          </p>
          <div id={showThree ? 'showFaq' : 'hideFaq'} className={styles.faqAnswer}>
            <p>
              Testing for your strengths and finding the soft spots is what it
              is all about. Pass the quiz and you can feel good about review.
              Fail the quiz and you know where to focus. If you find this
              project helps, then consider supporting this project.
            </p>
          </div>
        </div>

        <div className={styles.faqWrap}>
          <p className={styles.faqQuestion}>
            <span onClick={() => {closeAll(); setShowFour(!showFour)}}>
              <HiOutlineChevronDown className={styles.faqIcon} />
            </span>
            Do you offer a &quot;pass the exam guarantee&quot;?
          </p>
          <div id={showFour ? 'showFaq' : 'hideFaq'} className={styles.faqAnswer}>
            <p>
              Passing the exam is up to you, the information here will guide
              you, but I strongly suggest a course, like the course on{' '}
              <a
                className={styles.faqAtag}
                href='https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'>
                A Cloud Guru
              </a>
              . You will get the most out of this information if you are already
              familiar with it.
            </p>
          </div>
        </div>

        <div className={styles.faqWrap}>
          <p className={styles.faqQuestion}>
            <span onClick={() => {closeAll(); setShowFive(!showFive)}}>
              <HiOutlineChevronDown className={styles.faqIcon} />
            </span>
            Do you keep my test scores?
          </p>
          <div id={showFive ? 'showFaq' : 'hideFaq'} className={styles.faqAnswer}>
            <p>
              No, info like test and quiz, scores and answers are stored locally
              in your browser memory while you are on the site. Refresh the page
              and that data is lost. This will help retain what you learned.
              Your profile info like email and name are kept safe and secure. I
              use Stripe for accepting your donations to provide the most secure
              transaction possible. I never see that information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
