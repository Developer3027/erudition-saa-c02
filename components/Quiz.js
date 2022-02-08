import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Test.module.css';

const Quiz = ({ quizes }) => {
  const [msg, setMsg] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div className={styles.quizContainer}>
      <p className={styles.quizWrap}>
        Nothing fancy. Select your answer. If you get a alert then that answer
        is wrong. If you choose the correct answer, you will not get the alert.
        The quiz is not scored and not stored. This is to provide you a base
        line before continuing.
      </p>
      {quizes.map((quiz, i) => (
        <div key={i} className={styles.quizWrap}>
          <div className={styles.quizQuestion}>
            <span>{quiz.id}&#41; &nbsp;</span>
            <h3>{quiz.question}</h3>
          </div>
          <div className={styles.quizChoice}>
            <form className={styles.quizInputs}>
              <div className={styles.inputRow}>
                <input
                  type='radio'
                  id={quiz.id}
                  name={`answer${quiz.id}`}
                  value='a'
                  onChange={(e) => {
                    if (e.target.value !== quiz.answer) {
                      alert('Sorry, try again');
                      setCount(count++);
                    }
                  }}
                />
                <label>&nbsp; {quiz.a}</label>
              </div>
              <div className={styles.inputRow}>
                <input
                  type='radio'
                  id={quiz.id}
                  name={`answer${quiz.id}`}
                  value='b'
                  onChange={(e) => {
                    if (e.target.value !== quiz.answer) {
                      addCount();
                      alert('Sorry, try again');
                      setCount(count++);
                    }
                  }}
                />
                <label>&nbsp; {quiz.b}</label>
              </div>
              <div className={styles.inputRow}>
                <input
                  type='radio'
                  id={quiz.id}
                  name={`answer${quiz.id}`}
                  value='c'
                  onChange={(e) => {
                    if (e.target.value !== quiz.answer) {
                      addCount();
                      alert('Sorry, try again');
                      setCount(count++);
                    }
                  }}
                />
                <label>&nbsp; {quiz.c}</label>
              </div>
              <div className={styles.inputRow}>
                <input
                  type='radio'
                  id={quiz.id}
                  name={`answer${quiz.id}`}
                  value='d'
                  onChange={(e) => {
                    if (e.target.value !== quiz.answer) {
                      addCount();
                      alert('Sorry, try again');
                      setCount(count++);
                    }
                  }}
                />
                <label>&nbsp; {quiz.d}</label>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      ))}
      <h4>{msg && msg}</h4>
      <div className={styles.quizLinkWrap}>
        <button
          onClick={() => {
            if (count) {
              setMsg('Welcome, I hope this helps!');
            } else {
              setMsg('5 Stars!');
            }
          }}>
          check
        </button>
        <Link href='/saa-prep/a-fundamentals'>
          <a>Fundamentals</a>
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
