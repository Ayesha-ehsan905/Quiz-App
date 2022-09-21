import { styled } from "./style";

export const Button = styled("button", {
  "&.bnt_disabled": {
    padding: "16px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",

    // margin: "90px auto",
    transitionDuration: " 0.4s",
    cursor: "not-allowed",
    backgroundColor: "rgb(11 32 106)",
    color: "white",
    border: "4px solid #e7e7e7",
    fontSize: "24px",
    "&:hover": {
      // backgroundColor: "#e7e7e7",
      color: "white",
      fontWeight: "Bold",
      border: "2px solid white",
      background: "none",
    },
  },

  "&.btn_options": {
    margin: "20px 0",

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
