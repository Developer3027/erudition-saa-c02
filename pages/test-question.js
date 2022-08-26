//^ testing code to provide greater functionality to the quiz.
//^ current quiz allows to select only one answer. Need to have multiple response and multiple choice.
//^ first thing is set up, get test question array like the current data array.

//^ Want to be able to answer multiple response and multiple choice questions but not completely re write the current code.
//^ Multiple response questions will require checkbox. Current questions use li element.
//^ Added flag in question data to tell logic what type question it is.

//^ create an array of correct answers from the data as follows.
//^ Note that each answer has a correct field that is a boolean. If the answer is correct the boolean is true.
//^ Combine the id and correct fields into one string and populate array with true values.
//^ end array should look like ["a: true", "c: true", "e: true"] given the number of correct answers.
//^ sort the final answer array so "a" comes first. This is important as the arrays will be compared to each other later.

//^ create an array of correct choices from the user. The user should be able to change their mind as many times as they want.
//^ to accomplish getting user answers need to handle in two stages.
//^ first stage - use checkbox and either add or remove answers from array as user makes choices.
//^ Keep in mind the format of the answer array as they will be compared to each other. Sort the choices array.
//^ second stage - compare choices to answers. if compare fails then move on. Because arrays are sorted, no need to hunt through array for answer.

//^ if any bad choice then no score and move to next question.
//^ if no bad choice then all good, give point and move to next question.

import { useState } from "react";

import styles from "../styles/Test.module.css";

const questions = [
  {
    id: 1,
    cat: "1",
    multiple: true,
    q: "select all that apply",
    options: [
      {
        id: "a",
        text: "pick a",
        correct: false,
      },
      {
        id: "b",
        text: "pick b",
        correct: true,
      },
      {
        id: "c",
        text: "pick c",
        correct: false,
      },
      {
        id: "d",
        text: "pick d",
        correct: true,
      },
    ],
    explain: "explain for question 1",
  },
  {
    id: 2,
    cat: "2",
    multiple: false,
    q: "select one",
    options: [
      {
        id: "a",
        text: "pick a",
        correct: false,
      },
      {
        id: "b",
        text: "pick b",
        correct: true,
      },
      {
        id: "c",
        text: "pick c",
        correct: false,
      },
      {
        id: "d",
        text: "pick d",
        correct: false,
      },
    ],
    explain: "explain for question 2",
  },
  {
    id: 3,
    cat: "1",
    multiple: true,
    q: "select all that apply",
    options: [
      {
        id: "a",
        text: "pick a",
        correct: false,
      },
      {
        id: "b",
        text: "pick b",
        correct: true,
      },
      {
        id: "c",
        text: "pick c",
        correct: false,
      },
      {
        id: "d",
        text: "pick d",
        correct: true,
      },
    ],
    explain: "explain for question 3",
  },
];

function TestQuestion() {
  //^ state to cycle through questions
  const [questionIndex, setQuestionIndex] = useState(0);

  const [msg, setMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [explain, setExplain] = useState("");
  const [score, setScore] = useState(0);
  const [final, setFinal] = useState(0);

  //^ boolean flag for multiple response. Not always true.
  const multipleResponse = questions[questionIndex]?.multiple;
  //^ get answers from question and create array
  const initArray = questions[questionIndex].options.map(correctScore);
  function correctScore(item) {
    if (item.correct === true) {
      return [item.id, item.correct].join(": ");
    } else return null;
  }
  //^ remove null value from creating arr of answers and ensure it is sorted.
  const answersArray = initArray
    .filter(function (value, index, arr) {
      return value !== null;
    })
    .sort();
  //^ init array for choices. Used in several functions
  const choiceArray = [];
  //^ function for multiple response choices
  const makeChoice = (answer, id, e) => {
    //^ check condition of input and either add or remove value from choice array. Sort array when done
    if (e.target.checked === true) {
      choiceArray.push(`${id}: ${answer}`);
    } else {
      choiceArray = choiceArray.filter((e) => e !== `${id}: ${answer}`);
    }
    choiceArray.sort();
  };
  //^ check answer of both question types
  const answerExamQuestion = (answer) => {
    //^ if multiple response compare the arrays
    if (answersArray.length > 1) {
      //^ set flag for if answers are good.
      const fail = false;
      //^ variable for loop iteration
      const check = answersArray.length;
      //^ role that beautiful bean footage
      for (let i = 0; i < check; i++) {
        if (answersArray[i] !== choiceArray[i]) {
          //^ fail if no match
          fail = true;
        }
      }
      //^ if arrays match, do good work
      if (fail === false) {
        //^ choices good so add to score and set messages
        setScore((previousScore) => previousScore + 1);
        setMsg("Correct! Click me for the next question.");
        setErrorMsg("");
        setExplain(`${questions[questionIndex].explain}`);
      } else {
        //^ if arrays do not match, give tip.
        //todo give link to category organized markdown / display better explain info
        setExplain("");
        setErrorMsg(
          `Sorry, that was not correct. You should review domain ${questions[questionIndex].cat}. Click me for the next question`,
        );
        fail = false;
      }
    } else {
      //^ if multiple choice test the answer.
      //? the answerArray includes answer.
      //^ since the answer being passed in is a boolean, I can use it as conditional.
      if (answer) {
        //^ answer is true, add to score and set messages
        setScore((previousScore) => previousScore + 1);
        setMsg("Correct! Click me for the next question.");
        setErrorMsg("");
        setExplain(`${questions[questionIndex].explain}`);
      } else {
        //^ if answer is false, wrong answer.
        setExplain("");
        setErrorMsg(
          `Sorry, that was not correct. You should review domain ${questions[questionIndex].cat}. Click me for the next question`,
        );
      }
    }
  };
  //^ advance to the next question. score has already been set. If last question set final, even if no score, give points for participation
  const nextQuestion = () => {
    setMsg("");
    setErrorMsg("");
    setExplain("");
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex((previousQuestionIndex) => previousQuestionIndex + 1);
    } else {
      if (score === 0) {
        setFinal((0.01 / questions.length) * 0.01);
      } else {
        setFinal((score / questions.length) * 100);
      }
    }
  };

  return (
    <>
      <div className={styles.testContainer}>
        <div className={styles.testWrap}>
          <h1>Practice Exam</h1>
          <p>
            Here are some practice questions to get ready for big day. Good
            luck! Choose your answer and a message will let you know if you were
            right or wrong. If it is incorrect you will be told which domain to
            focus on. The domains tested in the exam are:
          </p>
          <ul>
            <li>Domain 1 - Resilient Architecture - 30%</li>
            <li>Domain 2 - High Performing Architecture - 28%</li>
            <li>Domain 3 - Secure Applications - 24%</li>
            <li>Domain 4 - Cost Optimized Architectures - 18%</li>
          </ul>
          <p>This practice is not timed. All questions will have one answer.</p>
          <h2>
            {questionIndex + 1} of {questions.length} Score: {score}
          </h2>
          {final ? (
            <div className={styles.testFinal}>
              <h3>
                Your final score was {score} out of {questions.length} or{" "}
                {final}%.
              </h3>
              <p>Refresh the page and try again!</p>
            </div>
          ) : (
            <>
              {multipleResponse ? (
                <div>
                  <h3>{questions[questionIndex].q}</h3>
                  <p>true</p>
                  {questions[questionIndex].options.map((option, i) => (
                    <>
                      <input
                        type="checkbox"
                        name="radio"
                        key={i}
                        className=""
                        onClick={(e) =>
                          makeChoice(option.correct, option.id, e)
                        }
                      />
                      <label key={i + 1} htmlFor="radio">
                        {option.text}
                      </label>
                    </>
                  ))}
                  <button onClick={() => answerExamQuestion()}>submit</button>
                </div>
              ) : (
                <div>
                  <h3>{questions[questionIndex].q}</h3>
                  <p>false</p>
                  <ul>
                    {questions[questionIndex].options.map((option) => (
                      <li
                        key={option.id}
                        className={styles.testLi}
                        onClick={() => answerExamQuestion(option.correct)}>
                        {option.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
          {explain && <p>{questions[questionIndex].explain}</p>}
        </div>
      </div>
    </>
  );
}

export default TestQuestion;
