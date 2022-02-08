import React, { useState } from 'react';

import styles from '../styles/Test.module.css';

const Quiz = ({ slug, quiz }) => {
  console.log(slug)
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
    <>
      <h1>{slug} Quiz</h1>
      <div>
        <p>
          Welcome Spot Checks. Spot Checks are tiny quiz&#39;s to wet your
          appetite. Here you can see the number of questions, the current
          question your on and your score. You get one point for each correct
          answer, zero for wrong answers. This score is for you and is a way to
          measure your knowledge before moving on to the notes. Pass or fail,
          you will still reach the cliff notes after the quiz. Enjoy!
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
  );
};

export default Quiz;

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/quiz/${slug}`);
  const data = await res.json();
  const quiz = data;
  console.log(quiz)

  return {
    props: {
      quiz
    }
  };
}
