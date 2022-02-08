import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';

import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

const HomeDonate = () => {
  const [support, setSupport] = useState(true);
  const [member, setMember] = useState(true);
  const [premium, setPremium] = useState(true);
  return (
    <div className={styles.donateContainer}>
      <div className={styles.donateHead}>
        <h3 className={styles.subTitle}>Built for you!</h3>
        <p className={styles.donateSubTitle}>
          This site is 100% supported by you. Help keep it free, add new
          features and keep content up to date by showing your support today!
        </p>

        <div className={styles.donateGrid}>
          {support ? (
            <div className={styles.donateCardLight}>
              <div className={styles.donateCardHead}>
                <h1>Supportive</h1>
                <HiOutlineQuestionMarkCircle
                  onClick={() => setSupport(!support)}
                  className={styles.donateInfo}
                />
              </div>
              <div className={styles.donatePrice}>
                <h1>$ 5.00</h1>
                <small>&nbsp;usd</small>
              </div>
              <div>
                <div className={styles.donateList}>
                  <p>Keep the exam questions up to date!</p>
                  <p>Support new feature implementation</p>
                </div>
              </div>
              <button className={styles.donateBtn}>Donate Now</button>
            </div>
          ) : (
            <div className={styles.donateCardLight}>
              <div className={styles.donateCardHead}>
                <h1>Supportive</h1>
                <HiOutlineQuestionMarkCircle
                  onClick={() => setSupport(!support)}
                  className={styles.donateInfo}
                />
              </div>
              <div>
                <div className={styles.donateList}>
                  <p>
                    With your support I can keep this site up to date and up and
                    running.
                  </p>
                  <p>Coming Soon</p>
                  <p>
                    Light and Dark mode / Members hold questions for review /
                    Members see scores in dashboard / Members chat for cert-prep
                  </p>
                </div>
              </div>
              <button className={styles.donateBtn}>Donate Now</button>
            </div>
          )}
          {premium ? (
            <div className={styles.donateCard}>
              <div className={styles.donateCardHead}>
                <h1>Premium</h1>
                <HiOutlineQuestionMarkCircle
                  onClick={() => setPremium(!premium)}
                  className={styles.donateInfo}
                />
              </div>
              <div className={styles.donatePrice}>
                <h1>$ 20.00</h1>
                <small>&nbsp;usd</small>
              </div>
              <div>
                <h3 className={styles.donateListHead}>Member</h3>
                <p>+ plus +</p>
                <div className={styles.donateList}>
                  <p>Slack</p>
                  <p>ACloudGuru Membership</p>
                  <p>Test new features before public</p>
                </div>
              </div>
              <button className={styles.donateBtn}>Donate Now</button>
            </div>
          ) : (
            <div className={styles.donateCard}>
              <div className={styles.donateCardHead}>
                <h1>Premium</h1>
                <HiOutlineQuestionMarkCircle
                  onClick={() => setPremium(!premium)}
                  className={styles.donateInfo}
                />
              </div>
              <div>
                <div className={styles.donateList}>
                  <p>
                    Join Slack and gain access to other resources and easily
                    talk with others.
                  </p>
                  <p>
                    May take up to 8 hours to receive free week access to
                    ACloudGuru.
                  </p>
                  <p>
                    Future plans to offer basic access to ACloudGuru for $42.50.
                  </p>
                </div>
              </div>
              <button className={styles.donateBtn}>Donate Now</button>
            </div>
          )}
          {member ? (
            <div className={styles.donateCardLight}>
              <div className={styles.donateCardHead}>
                <h1>Member</h1>
                <HiOutlineQuestionMarkCircle
                  onClick={() => setMember(!member)}
                  className={styles.donateInfo}
                />
              </div>
              <div className={styles.donatePrice}>
                <h1>$ 10.00</h1>
                <small>&nbsp;usd</small>
              </div>
              <div>
                <h3 className={styles.donateListHead}>Supportive</h3>
                <p>+ plus +</p>
                <div className={styles.donateList}>
                  <p>Facebook</p>
                  <p>Study and discuss with others</p>
                </div>
              </div>
              <button className={styles.donateBtn}>Donate Now</button>
            </div>
          ) : (
            <div className={styles.donateCardLight}>
              <div className={styles.donateCardHead}>
                <h1>Premium</h1>
                <HiOutlineQuestionMarkCircle
                  onClick={() => setMember(!member)}
                  className={styles.donateInfo}
                />
              </div>
              <div>
                <div className={styles.donateList}>
                  <p>
                    With your support I can keep this site up to date and up and
                    running.
                  </p>
                  <p>Join the Facebook group and enjoy all it has to offer.</p>
                </div>
              </div>
              <button className={styles.donateBtn}>Donate Now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeDonate;
