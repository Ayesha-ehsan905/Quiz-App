import { useEffect, useMemo, useState } from "react";
import { QuestionBox } from "./component/box";
import { Button } from "./component/button";
import { ReportText, Text } from "./component/text";
import { Report } from "./report";
import question from "./utlis";

type ReportObject = {
  question: string;
  answer: string;
  correctAnswer: string;
};
export const Quiz = () => {
  // current qst to display and if size is greater then 10 then display score
  const [currentQuestion, setcurrentQuestion] = useState<number>(0);
  //btn disabled if user doesnot select the ans
  const [btnDisabled, setbtnDisabled] = useState<boolean>(true);
  // total score at the end of quiz
  const [score, setscore] = useState<number>(0);
  //show score board
  const [showScore, setShowScore] = useState<boolean>(false);
  const [seconds, settimer] = useState(10);
  const [answer, setAnswer] = useState<string>("null");

  //End report
  const [userAnswers, setUserAnswers] = useState<ReportObject[]>([]);

  // current qst correct ans
  const correctAnswer = question[currentQuestion].correctAnswer;

  const currentQuestionClickHandler = () => {
    const nxtQuestion = currentQuestion;
    if (nxtQuestion < question.length - 1) {
      setbtnDisabled(true);
      settimer(10);
      setcurrentQuestion(
        (currentQuestion) => (currentQuestion = currentQuestion + 1)
      );
    } else {
      settimer(0);
      setShowScore(true);
    }
    return currentQuestion;
  };

  const checkAnswer = (user_answer: string) => {
    setAnswer(user_answer);
    setbtnDisabled(false);
    if (correctAnswer === user_answer) {
      setscore(score + 1);
    }

    const useransObject = {
      question: question[currentQuestion].question,
      answer: user_answer,
      correctAnswer: correctAnswer,
    };
    setUserAnswers((prev) => [...prev, useransObject]);
  };
  useEffect(() => {
    const id = setInterval(() => {
      if (seconds > 0) {
        settimer(seconds - 1);
      }

      if (seconds == 1) {
        checkAnswer("You missed it");
        currentQuestionClickHandler();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [seconds, currentQuestion]);

  // const timer = () => {
  //   if (seconds > 0) {
  //     settimer(seconds - 1);
  //   }

  //   if (seconds == 1) {
  //     // checkAnswer("You missed it", e);
  //     currentQuestionClickHandler();
  //   }
  // };

  const shuffleArray = useMemo(() => {
    return question[currentQuestion].answers.sort(() => 0.5 - Math.random());
  }, [currentQuestion]);

  return (
    <>
      {showScore ? (
        <QuestionBox className="score">
          <Text style={{ textAlign: "start" }}>
            You scored {score} out of {question.length}
          </Text>
          <Report userAnswer={userAnswers} />
        </QuestionBox>
      ) : (
        <>
          <span style={{ fontSize: "30px", color: "Red", marginTop: "30px" }}>
            Time Left(s):{seconds}
          </span>
          <Text>{question[currentQuestion].question}</Text>
          <QuestionBox className="option_btn">
            {/* {question[currentQuestion].answers.map((ans) => { */}
            {shuffleArray.map((ans) => {
              return (
                <Button
                  className="btn_options"
                  style={{
                    cursor: btnDisabled ? "pointer " : "not-allowed",
                    backgroundColor:
                      ans == answer ? "none" : " rgb(125, 60, 255)",
                    border: ans == answer ? "1px solid purple" : " none",
                    background:
                      ans == answer ? "border-box" : " rgb(125, 60, 255)",
                    color: ans == answer ? "black" : " white",
                  }}
                  //  onClick={btnDisabledOnClickandler}
                  onClick={() => checkAnswer(ans)}
                  disabled={!btnDisabled}
                >
                  {ans}
                </Button>
              );
            })}
          </QuestionBox>
          <Button
            className="bnt_disabled"
            style={{
              cursor: btnDisabled ? "not-allowed " : "pointer",
            }}
            onClick={currentQuestionClickHandler}
            disabled={btnDisabled}
          >
            Next
          </Button>
        </>
      )}
    </>
  );
};
