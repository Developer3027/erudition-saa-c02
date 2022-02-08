import React from 'react';
import Link from 'next/link';
import styles from '../../styles/About.module.css';

const Goal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h1>Goal for site</h1>
        <div className={styles.aboutNav}>
          <Link href='/about/goal'>
            <a className={styles.aboutNavLink}>The Goal</a>
          </Link>
          <Link href='/about/ref'>
            <a className={styles.aboutNavLink}>References</a>
          </Link>
        </div>
        <p>
          I believe AWS is a great system. It is full of terrific tools and
          services made available for anyone to use. Big corporations to the
          everyday individual has access to the same resources. That is an
          amazing concept and AWS provides a powerful ecosystem of tools and
          services.
        </p>
        <p>
          AWS has really grown over the past years. One of the great resources
          provided by AWS is all the documentation. AWS has grown so much and
          the documentation is so in depth that there are now many various
          certification available from AWS. Gaining a certification is a big
          thing if you deal with, or are interested in AWS. A certification
          shows that you know a specific, qualified range of information and
          have a range of experience within that certified scope of AWS. Having
          your certification means that you not only know general information,
          in regards to AWS, but that you have a solid knowledge of specific
          products as well as hands on experience of those products and
          services.
        </p>
        <p>
          I have been studying to get my AWS Solution Architect Associate
          certification. I have created this site for a few reasons. One, I
          wanted to assist others who were looking to get this certification. I
          have found that, taking the notes in markdown, has increased my typing
          speed and helped me retain the information. Second, I wanted to keep
          my coding skills of React and Next, as well as Design, fresh.{' '}
        </p>
        <p>
          This site is a first presentation of a larger web app. This site
          focuses on one specific AWS certification, however I do have plans to
          create other such sites that revolve around full stack web
          development. All of these concepts will eventually be rolled into one
          web app for learning.
        </p>
        <p>
          That is why I offer donation options. These funds help me create and
          maintain these site. They need to be updated regularly as well as
          maintained. If you have found value in this site, I encourage you to
          review these options. Your support helps keep the lights on and
          enables me to keep coding and designing.
        </p>
        <p>
          I also encourage you to not rely on these notes and practice alone.
          ACloudGuru is a site that focuses on serving up this information,
          providing hands on labs, with an eye to passing the exam. It really is
          a fantastic platform and you will not be disappointed.
        </p>
        <h3>Future Features</h3>
        <h5>Color Mode - public</h5>
        <p>
          I will be implementing a dark mode feature. Wondering if a theme mode
          would be nice, where you can choose from a list of colors. The colors
          would change the theme to suit that color.
        </p>
        <h5>Domain Info - public</h5>
        <p>
          There is a list of the domains the exam covers in the exam prep. I
          want to click on those and explain those domains. Maybe a drop that
          gives the information, and maybe be able filter cert prep info, by the
          sub domains, and link to it for further review.
        </p>
        <h5>Randomize Answers - public</h5>
        <p>
          The exam questions already randomize when loading the page. I need to
          randomize the answers as well. Also randomize answers for quiz&#39;s,
          (spot checks)
        </p>
        <h5>Chat - private</h5>
        <p>
          I think it would be nice to have a chat feature in the notes. After
          taking the quiz, a chat option so everyone can ask questions while
          going through the notes. I am thinking of being able to organize
          topics or discussions kind of like Slack does. Members only feature.
        </p>
        <h5>Hold Question - private</h5>
        <p>
          I think it would be nice to be able to hold or star questions for
          review. Maybe marking a question allows one to review it later along
          with information specific to it. Members only feature.
        </p>
        <h5>Filter Questions - private</h5>
        <p>
          Ability to filter the questions so one can focus on specific domains
          or topics. Members only feature.
        </p>
      </div>
    </div>
  );
};

export default Goal;
