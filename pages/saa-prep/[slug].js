import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { quizsData } from '../../data/quizsData';
import HomeLearningAd from '../../components/forHome/HomeLearningAd';

import styles from '../../styles/Test.module.css';

export default function CliffNotes({ slug, quiz }) {
  
  const [showQuiz, setShowQuiz] = useState(true);
  const [showPromo, setShowPromo] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questionAnswered = (correct) => {
    if (score <= 2) {
      setShowPromo(true);
    } else {
      setShowPromo(false);
    }

    if (correct) {
      setScore((previousScore) => previousScore + 1);
    }

    if (currentQuestion + 1 < quiz.result.length) {
      setCurrentQuestion(
        (previousCurrentQuestion) => previousCurrentQuestion + 1
      );
    } else {
      setShowQuiz(false);
    }
  };

  return (
    <div className={styles.testContainer}>
      <div className={styles.testWrap}>
        <div className={styles.testBody}>
          {quiz && showQuiz ? (
            <>
              <h1>{slug} Quiz</h1>
              <div>
                <p>
                  Welcome Spot Checks. Spot Checks are tiny quiz&#39;s to wet
                  your appetite. Here you can see the number of questions, the
                  current question your on and your score. You get one point for
                  each correct answer, zero for wrong answers. This score is for
                  you and is a way to measure your knowledge before moving on to
                  the notes. Pass or fail, you will still reach the cliff notes
                  after the quiz. Enjoy!
                </p>
                <h2>
                  {currentQuestion + 1} of {quiz.result.length} Score: {score}
                </h2>
                <h3>{quiz.result[currentQuestion].question}</h3>
                <ul>
                  {quiz.result[currentQuestion].options.map((option) => (
                    <li
                      key={option.id}
                      className={styles.testLi}
                      onClick={() => questionAnswered(option.correct)}>
                      {option.text}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              {quiz && (
                <h2 className={showPromo ? styles.testFail : styles.testPass}>
                  You got {score} out of {quiz.result.length} correct
                </h2>
              )}
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              {showPromo && <HomeLearningAd />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {

  const files = fs.readdirSync(path.join('data/notes'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params:{ slug } }) {
  const quiz = quizsData.find((quiz) => quiz.id === slug);

  const markdownWithMeta = fs.readFileSync(
    path.join('data/notes', slug + '.md'),
    'utf-8'
  );

  const { content } = matter(markdownWithMeta);

  const processedContent = await remark().use(html).process(content);

  const contentHtml = processedContent.toString();

  return {
    props: {
      slug,
      contentHtml,
      quiz
    }
  };
}
