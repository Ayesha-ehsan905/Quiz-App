import { createStitches } from "@stitches/react";

const theme = createStitches({});

const gobalCss = theme.globalCss({
  body: {
    backgroundColor: "#fff",
    // backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%)",
    fontFamily: "Poppins",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: " center",
    // color: "#00203FFF",
    color: "white",
  },
});
gobalCss();
export const styled = theme.styled;
