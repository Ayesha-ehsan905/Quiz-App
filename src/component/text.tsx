import { styled } from "./style";

export const Text = styled("p", {
  lineHeight: "32px",
  letterSpacing: "1px",
  fontSize: "28px",
  // textAlign: "center",
  width: "80%",
  margin: "50px 0",
  fontWeight: "800",
});

export const ReportText = styled("p", {
  "&.question": {
    fontFamily: "sans-serif",
    fontSize: "24px",
    lineHeight: "20px",
    margin: "20px auto",
  },
  "&.options": {
    fontFamily: "sans-serif",
    fontSize: "20px",
    margin: "20px auto",
  },
});
