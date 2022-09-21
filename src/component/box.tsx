import { styled } from "./style";

export const Container = styled("div", {
  //   backgroundColor: "White",
  "&.container": {
    // width: "90%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "80px auto",
  },
});
export const QuestionBox = styled(Container, {
  "&.outer_box": {
    paddingBottom: "20px",
    width: "80%",
    height: "auto",
    // minHeight: "500px",
    // height: "min-content",
    // backgroundColor: "#ADEFD1FF",timer
    background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%);",
    borderRadius: "15px",
    boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "space-evenly",
    // alignItems: "center",
  },
  "&.answer-section": {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-between",
  },

  "&.score": {
    height: "auto",
    marginTop: "40px",
  },
  "&.question-section": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ".question-section-child": {
    width: "50%",
    height: "auto",
    margin: "50px 30px",
  },
  ".question-count": {
    margin: "50px auto",
  },

  ".question-count-span": {
    fontSize: "28px",
    display: "block",
  },

  "&.question-text ": {
    margin: "40px auto",
    fontSize: "28px",
  },
  ".timer-text ": {
    padding: "15px",
    // marginTop: "20px",
    // marginRight: "20px",
    border: "5px solid rgb(11, 32, 106)",
    bordeRadius: "15px",
    textAlign: "center",
    fontSize: "24px",
    // fontWeight: "600",
  },
});
