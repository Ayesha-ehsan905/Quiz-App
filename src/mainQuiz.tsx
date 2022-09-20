import { useEffect, useMemo, useState } from "react";
import { QuestionBox } from "./component/box";
import { Button } from "./component/button";
import { ReportText, Text } from "./component/text";
import question from "./utlis";

export default () => {
  type reportObject = {
    question: string;
    answer: string;
    correctAnswer: string;
  };
  // current qst to display and if size is greater then 10 then display score
  const [currentQuestion, setcurrentQuestion] = useState<number>(0);
  //btn disabled if user doesnot select the ans
  const [btnDisabled, setbtnDisabled] = useState<boolean>(true);
  // total score at the end of quiz
  const [score, setscore] = useState<number>(0);
  //show score board
  const [showScore, setShowScore] = useState<boolean>(false);
  const [seconds, settimer] = useState(10);

  //End report
  const [userAnswers, setUserAnswers] = useState<reportObject[]>([]);
  // const [userAnswer, setUserAnswer] = useState<boolean>(false);

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

  // const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  const checkAnswer = (user_answer: string) => {
    // const user_answer = e.currentTarget.value;

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
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [seconds, currentQuestion]);

  const timer = () => {
    if (seconds > 0) {
      settimer(seconds - 1);
    }

    if (seconds == 1) {
      checkAnswer("You missed it");
      currentQuestionClickHandler();
    }
  };

  const shuffleArray = useMemo(() => {
    return question[currentQuestion].answers.sort(() => 0.5 - Math.random());
  }, [currentQuestion]);

  return (
    <>
      {showScore ? (
        <QuestionBox className="score">
          <Text>
            You scored {score} out of {question.length}
          </Text>
          <div>
            {userAnswers.map((e) => {
              const cor_ans = e.correctAnswer;
              const ans = e.answer;
              const color = cor_ans == ans;
              if (color) {
                return (
                  <div>
                    <ReportText className="question">
                      <span style={{ fontWeight: "Bold" }}>Question</span> :
                      {e.question}
                    </ReportText>
                    <ReportText className="options">
                      <span style={{ fontWeight: "Bold" }}>Your Answer :</span>
                      <span
                        style={{
                          backgroundColor: "green",
                          padding: "10px",
                        }}
                      >
                        {e.answer}
                      </span>
                    </ReportText>
                    <ReportText className="options">
                      <span style={{ fontWeight: "Bold" }}>
                        Correct Answer :
                      </span>
                      <span style={{ fontWeight: "Bold" }}>
                        {e.correctAnswer}
                      </span>
                    </ReportText>
                  </div>
                );
              } else {
                return (
                  <div>
                    <ReportText className="question">
                      <span style={{ fontWeight: "Bold" }}>Question</span> :
                      {e.question}
                    </ReportText>
                    <ReportText className="options">
                      <span style={{ fontWeight: "Bold" }}>Your Answer :</span>
                      <span
                        style={{
                          backgroundColor: "red",
                          padding: "10px",
                        }}
                      >
                        {e.answer}
                      </span>
                    </ReportText>
                    <ReportText className="options">
                      <span style={{ fontWeight: "Bold" }}>
                        Correct Answer :
                      </span>
                      <span style={{ fontWeight: "Bold" }}>
                        {e.correctAnswer}
                      </span>
                    </ReportText>
                  </div>
                );
              }
            })}
          </div>
        </QuestionBox>
      ) : (
        <>
          <span style={{ fontSize: "30px", color: "Red" }}>
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
