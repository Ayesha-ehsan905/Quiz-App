import { styled } from "./style";

export const Button = styled("button", {
  "&.bnt_disabled": {
    padding: "16px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",

    margin: "4px 2px",
    transitionDuration: " 0.4s",
    cursor: "not-allowed",
    backgroundColor: "White",
    color: "black",
    border: "2px solid #e7e7e7",
    fontSize: "24px",
    "&:hover": {
      backgroundColor: "#e7e7e7",
      color: "Black",
      fontWeight: "Bold",
      border: "2px solid Black",
    },
  },

  "&.btn_options": {
    margin: "20px 0",
    backgroundColor: "#7d3cff",
    border: "none",
    padding: "20px 40px",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "1.6em",
    letterSpacing: "1px",
    cursor: " pointer",
    width: "100%",
    height: "auto",
  },
});
