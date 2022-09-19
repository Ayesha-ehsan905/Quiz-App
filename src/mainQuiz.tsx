import { useEffect, useState } from "react";
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
  const [showScore, setShowScore] = useState(false);
  // current qst correct ans
  const correctAnswer = question[currentQuestion].correctAnswer;

  const nxtQuestion = currentQuestion;

  const currentQuestionClickHandler = () => {
    setbtnDisabled(true);
    if (nxtQuestion < question.length - 1) {
      setcurrentQuestion(
        (currentQuestion) => (currentQuestion = currentQuestion + 1)
      );
    } else {
      setShowScore(true);
    }
    return currentQuestion;
  };

  const checkAnswer = (props: String) => {
    setbtnDisabled(false);
    if (correctAnswer === props) {
      setscore(score + 1);
    }
  };
  const shuffleArray = question[currentQuestion].answers;

  // shuffleArray.sort(() => 0.5 - Math.random());

  return (
    <>
      {showScore ? (
        <QuestionBox className="">
          You scored {score} out of {question.length}
        </QuestionBox>
      ) : (
        <>
          <Text>{question[nxtQuestion].question}</Text>
          <QuestionBox className="option_btn">
            {/* {question[currentQuestion].answers.map((ans) => { */}
            {shuffleArray.map((ans) => {
              return (
                <Button
                  className="btn_options"
                  //  onClick={btnDisabledOnClickHandler}
                  onClick={() => checkAnswer(ans)}
                >
                  {ans}
                </Button>
              );
            })}
          </QuestionBox>

          <Button
            className="bnt"
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
