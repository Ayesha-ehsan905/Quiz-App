import { styled } from "./style";

export const Container = styled("div", {
  //   backgroundColor: "White",
  "&.container": {
    width: "90%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export const QuestionBox = styled(Container, {
  "&.outer_box": {
    paddingBottom: "20px",
    width: "80%",
    height: "auto",
    backgroundColor: "White",
    borderRadius: "5px",
    boxShadow: "0 5px 10px 15px rgb(0 0 0 / 4%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "&.option_btn": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  },

  "&.score": {
    height: "500px",
    marginTop: "40px",
  },
});
