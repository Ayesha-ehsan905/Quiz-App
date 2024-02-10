import { Container, QuestionBox } from "./component/box";
import { Quiz } from "./mainQuiz";

const App = (props: any) => {
  return (
    <>
      <Container className="container">
        <QuestionBox className="outer_box">
          <Quiz />
        </QuestionBox>
      </Container>
    </>
  );
};

export default App;
