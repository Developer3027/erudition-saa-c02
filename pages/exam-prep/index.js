import React, { useState } from 'react';
import { ExamPractice } from '../../data/ExamPracticeQuestions';

import styles from '../../styles/Test.module.css';

const ExamPrep = ({ examData }) => {
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [explain, setExplain] = useState('');
  const [wrong, setWrong] = useState(false);
  const [examQuestion, setExamQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [final, setFinal] = useState(0);

  const answerExamQuestion = (correct) => {
    if (correct) {
      if (!wrong) {
        setScore((previousScore) => previousScore + 1);
      }
      setMsg('Correct! Click me for the next question.');
      setErrorMsg('');
      setExplain(`${examData.explain}`);
    } else {
      setExplain('');
      if (wrong === false) {
        setWrong((previousWrong) => !previousWrong);
      }
      setErrorMsg(
        `Sorry, that was not correct. You should review domain ${examData[examQuestion].cat}. Click me for the next question`
      );
    }
  };

  const nextQuestion = () => {
    console.log(final);
    console.log(examData.length)
    console.log(examQuestion)
    setMsg('');
    setErrorMsg('');
    setExplain('');
    if (wrong === true) {
      setWrong((previousWrong) => !previousWrong);
    }
    if (examQuestion + 1 < examData.length) {
      setExamQuestion((previousExamQuestion) => previousExamQuestion + 1);
    } else {
      setFinal((score / examData.length) * 100);
    }
  };

  return (
    <div className={styles.testContainer}>
      <div className={styles.testWrap}>
        <h1>Practice Exam</h1>
        <p>
          Here are some practice questions to get ready for big day. Good luck!
          Choose your answer and a message will let you know if you were right
          or wrong. If it is incorrect you will be told which domain to focus
          on. The domains tested in the exam are:
        </p>
        <ul>
          <li>Domain 1 - Resilient Architecture - 30%</li>
          <li>Domain 2 - High Performing Architecture - 28%</li>
          <li>Domain 3 - Secure Applications - 24%</li>
          <li>Domain 4 - Cost Optimized Architectures - 18%</li>
        </ul>
        <p>This practice is not timed. All questions will have one answer.</p>
        <h2>
          {examQuestion + 1} of {examData.length} Score: {score}
        </h2>

        {final ? (
          <div className={styles.testFinal}>
            <h3>Your final score was {score} out of {examData.length} or {final}%.</h3>
            <p>Refresh the page and try again!</p>
          </div>
        ) : (
          <>
            <h3>{examData[examQuestion].q}</h3>
            <ul>
              {examData[examQuestion].options.map((option) => (
                <li
                  key={option.id}
                  className={styles.testLi}
                  onClick={() => answerExamQuestion(option.correct)}>
                  {option.text}
                </li>
              ))}
            </ul>
          </>
        )}
        {msg && (
          <p className={styles.testMsg} onClick={() => nextQuestion()}>
            {msg}
          </p>
        )}
        {errorMsg && (
          <p className={styles.testErrorMsg} onClick={() => nextQuestion()}>
            {errorMsg}
          </p>
        )}
        {explain && <p>{examData[examQuestion].explain}</p>}
      </div>
    </div>
  );
};

export default ExamPrep;

export async function getStaticProps() {
  const examData = ExamPractice;

  const shuffleQuestions = (examData) => {
    examData.sort(() => Math.random() - 0.5);
  };
  shuffleQuestions(examData);

  return {
    props: {
      examData
    }
  };
}
