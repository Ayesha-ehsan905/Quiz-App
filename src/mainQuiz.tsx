import { useState } from "react";
import { QuestionBox } from "./component/box";
import { Button } from "./component/button";
import { Text } from "./component/text";
import question from "./utlis";

export default () => {
  const [currentQuestion, setcurrentQuestion] = useState<number>(1);
  const [btnDisabled, setbtnDisabled] = useState<boolean>(true);

  const currentQuestionClickHandler = () => {
    setcurrentQuestion(
      (currentQuestion) => (currentQuestion = currentQuestion + 1)
    );
    return currentQuestion;
  };

  const btnDisabledOnClickHandler = () => {
    setbtnDisabled(false);
  };

  const shuffleArray = question[currentQuestion].answers;

  shuffleArray.sort(() => 0.5 - Math.random());
  return (
    <>
      <Text>{question[currentQuestion].question}</Text>
      <QuestionBox className="option_btn">
        {/* {question[currentQuestion].answers.map((ans) => { */}
        {shuffleArray.map((ans) => {
          return (
            <Button className="btn_options" onClick={btnDisabledOnClickHandler}>
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
  );
};
