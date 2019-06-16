import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:hover": { backgroundColor: "#000" }
    },
    primary: {
      backgroundColor: "#000"
    }
  })
);
