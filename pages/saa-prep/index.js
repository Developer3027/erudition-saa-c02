import React from 'react';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

import Note from '../../components/Note';
import styles from '../../styles/Test.module.css';

const CertPrep = ({ notes }) => {
  return (
    <div className={styles.testContainer}>
      <div className={styles.testWrap}>
        <div className={styles.testLeft}>
          <h3>Certification Preparation</h3>
          <p>
            Welcome to the cliff notes test prep for the AWS Solution Architect
            Associate certification exam. These notes were taken while going
            through the ACloudGuru.com certification course, or through course
            work at PluralSight. I recommend reviewing the courses yourself.
            -&gt;{" "}
            <a
              className={styles.testAnchor}
              href="https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02"
              target="_blank"
              rel="noopener noreferrer">
              A cloud Guru
            </a>{" / "}
            <a
              className={styles.testAnchor}
              href="https://app.pluralsight.com/explore/certifications/topics/aws"
              target="_blank"
              rel="noopener noreferrer">
              PluralSight
            </a>
          </p>
        </div>
        <div className={styles.testGrid}>
          {notes.map((note, i) => (
            <Note key={i} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertPrep;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('data/notes'));
  // get slug and frontmatter
  const notes = files.map((filename) => {
    // create slug
    const slug = filename.replace('.md', '');
    // create frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('data/notes', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    };
  });

  return {
    props: {
      notes
    }
  };
}
