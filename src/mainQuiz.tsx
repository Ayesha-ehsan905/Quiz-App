import { useEffect, useMemo, useState } from "react";
import { QuestionBox } from "./component/box";
import { Button } from "./component/button";
import { Text } from "./component/text";
import question from "./utlis";

export default () => {
  // current qst to display and if size is greater then 10 then display score
  const [currentQuestion, setcurrentQuestion] = useState<number>(0);
  //btn disabled if user doesnot select the ans
  const [btnDisabled, setbtnDisabled] = useState<boolean>(true);
  // total score at the end of quiz
  const [score, setscore] = useState<number>(0);
  //show score board
  const [showScore, setShowScore] = useState<boolean>(false);
  const [seconds, settimer] = useState(10);

  // current qst correct ans
  const correctAnswer = question[currentQuestion].correctAnswer;

  const nxtQuestion = currentQuestion;
  const currentQuestionClickHandler = () => {
    setbtnDisabled(true);
    settimer(10);
    if (nxtQuestion < question.length - 1) {
      setcurrentQuestion(
        (currentQuestion) => (currentQuestion = currentQuestion + 1)
      );
    } else {
      setShowScore(true);
    }
    return currentQuestion;
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const props = e.currentTarget.value;

    setbtnDisabled(false);
    if (correctAnswer === props) {
      setscore(score + 1);
    }
  };
  useEffect(() => {
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [seconds, currentQuestion]);

  const timer = () => {
    settimer(seconds - 1);

    if (seconds == 1) {
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
        </QuestionBox>
      ) : (
        <>
          <span style={{ fontSize: "30px", color: "Red" }}>
            Time Left(s):{seconds}
          </span>
          <Text>{question[nxtQuestion].question}</Text>
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
                  onClick={checkAnswer}
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
