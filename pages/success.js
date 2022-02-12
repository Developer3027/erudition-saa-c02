import React from 'react';
import styles from '../styles/Success.module.css';

const Success = () => {
  return (
    <div className={styles.sucContainer}>
      <div className={styles.sucWrap}>
        <h1>Success!</h1>
        <h3>Thank you so much for your support!</h3>
        <p>
          Erudition will eventually included all sorts of valuable courses
          revolving around full stack development, web app development, and
          certifications. Thank you for being a part of the journey.
        </p>
        <p>Erudition is designed, developed, and maintained by Developer3027. My name is Mason Roberts, so nice to meet you! You can reach me directly at mrobe18@gmail.com.</p>
        <p>I will send you a email linking to the group or groups you signed up for. I prefer to be hands on, so this may take up to a day. Generally I am pretty quick.</p>
        <p>As of 2/12/22, I am still working on setting things up. I encourage donations at the $10 and $20 dollar level to be patient. You will be the first members to the Facebook group and Slack channel. I still have concerns with site construction to address and those will be set up soon. Your access time will begin the day the link is sent. Thank you for your understanding.</p>
      </div>
    </div>
  );
}

export default Success