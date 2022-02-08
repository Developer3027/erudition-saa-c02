import React from 'react';
import Link from 'next/link';
import styles from '../../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h1>About</h1>
        <div className={styles.aboutNav}>
          <Link href='/about/goal'>
            <a className={styles.aboutNavLink}>The Goal</a>
          </Link>
          <Link href='/about/ref'>
            <a className={styles.aboutNavLink}>References</a>
          </Link>
        </div>
        <p>
          I built this site as a personal project. It is responsive but works
          best on screens over 1000 pixels wide. If you find any issues please
          let me know. It would be helpful if you provided information on the
          device and browser used.
        </p>
        <p>
          As you probably have guessed by now, I am going through the AWS
          Solution Architect Associate course on ACloudGuru and I love it. It is
          by far the best presented course I have taken. It is very well thought
          out. One of the things I love about it is it focuses on passing the
          exam. Sure it gives you information on all the different services. No
          doubt it explains the topics so you understand. What it does not do is
          try to teach you everything about every service. It sticks to what you
          need to know to reason through the exam. They give you references and
          resources to review if you want to dive deeper, but they don&#39;t
          waste time on it.
        </p>
        <p>
          The platform has a lot of functionality and is a pleasure to deal
          with. I did want a different way to go through practice questions
          though. I also preferred to take quiz&#39;s before going through the
          content in the chapter. So I built this site as cliff notes and set up
          the practice questions the way I wanted. I understand that the exam
          will be timed, but if I do not know the answer, after I narrow the
          field, I wanted to take the time and research it. This way I can
          figure out why I was falling short with that one.
        </p>
        <p>
          As I went through the courses, I took notes as markdown files. This
          came in handy when I decided to make this site. Once I realized that I
          wanted different functionality, I also knew that I needed to create it
          quickly. Some quick playing in React and I had a solid prototype. I
          decided to build the frontend in ReactJs with NextJs. What a absolute
          joy it has been playing with NextJs. I have been a fan of ReactJs for
          years and it was a big reason why I decided on NextJs.
        </p>
        <p>
          Another plus was the NextJs API. I tend to use JSON Server when
          designing and building dynamic sites. I can mimic the backend locally.
          Add fields or remove them, put this there and that here. Getting the
          shape of the backend makes it easier to build out the api. NextJs
          plays the same way I do.
        </p>
        <p>
          So the site is pretty much a blog serving up markdown files. I created
          the exam object and then created the javascript array of objects.
          After I had the information gathered, most of that was done
          previously, I used the NextJs API and served it up.
        </p>
        <p>
          Because I am still learning AWS, and wanted this released for review
          quickly, I decided to go with Google Firebase. It allows for the
          functionality I wanted and I am familiar with it. Authentication and
          the little data stores I am doing are handled with Firebase. As both
          the app and I grow I will move functionality to AWS.
        </p>
        <p>
          I hope this helps you in your journey to getting certified. I
          encourage you to take a look at ACloudGuru. They cover all the major
          cloud providers and certifications, not just AWS. If you find this
          project helps you. If you like what I have built here, please consider
          supporting the project.
        </p>
        <h3>Developer3027</h3>
        <p>Mason Roberts</p>
      </div>
    </div>
  );
};

export default About;
