import { ReportText } from "./component/text";

export const Report = (props) => {
  return (
    <>
      <div>
        {props.userAnswer.map((e) => {
          const cor_ans = e.correctAnswer;
          const ans = e.answer;
          const color = cor_ans == ans;

          return (
            <div style={{ margin: "40px auto" }}>
              <ReportText className="question">
                <span style={{ fontWeight: "Bold" }}>Question</span> :
                {e.question}
              </ReportText>
              <ReportText className="options">
                <span style={{ fontWeight: "Bold" }}>Your Answer :</span>
                <span
                  style={{
                    backgroundColor: color ? "green" : "red",
                    padding: "10px",
                    marginLeft: "10px",
                  }}
                >
                  {e.answer}
                </span>
              </ReportText>
              <ReportText className="options">
                <span style={{ fontWeight: "Bold" }}>Correct Answer :</span>
                <span style={{ fontWeight: "Bold", marginLeft: "10px" }}>
                  {e.correctAnswer}
                </span>
              </ReportText>
            </div>
          );
        })}
      </div>
    </>
  );
};
