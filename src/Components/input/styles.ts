import { createStyles, makeStyles } from "@material-ui/core";

export const useInputStyles = makeStyles(
  createStyles({
    // @ts-ignore
    root: {
      "& input": {
        cursor: "pointer"
      },
      color: "#A0A0A0",
      position: "relative",
      width: "100%",
      "&:after": {
        position: "absolute",
        content: '""',
        backgroundColor: "#A0A0A0",
        height: "1.5px",
        width: (props: { isUnderLine: boolean }) =>
          props.isUnderLine ? "100%" : "0%",
        bottom: 4,
        transition: "0.5s ease"
      }
    },
    disabled: { textDecoration: "line-through" }
  })
);
