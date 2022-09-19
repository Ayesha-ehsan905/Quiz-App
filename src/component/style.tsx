import { createStitches } from "@stitches/react";

const theme = createStitches({});

const gobalCss = theme.globalCss({
  body: {
    backgroundColor: "#b8c6db",
    backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%)",
    fontFamily: "Poppins",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: " center",
  },
});
gobalCss();
export const styled = theme.styled;
