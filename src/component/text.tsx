import { styled } from "./style";

export const Text = styled("p", {
  lineHeight: "27px",
  letterSpacing: "1px",
  fontSize: "2em",
  textAlign: "center",
  width: "80%",
  margin: "50px 0",
});

export const ReportText = styled("p", {
  "&.question": {
    fontFamily: "sans-serif",
    fontSize: "24px",
    lineHeight: "20px",
  },
  "&.options": {
    fontFamily: "sans-serif",
    fontSize: "20px",
  },
});
