import { Container, QuestionBox } from "./component/box";
import Quiz from "./mainQuiz";

function App() {
  return (
    <>
      <Container>
        <QuestionBox className="outer_box">
          <Quiz />
        </QuestionBox>
      </Container>
    </>
  );
}

export default App;
