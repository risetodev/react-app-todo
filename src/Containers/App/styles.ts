import { makeStyles } from "@material-ui/core";

export const useAppStyles = makeStyles({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center"
  },
  newTaskButton: {
    position: "fixed",
    alignSelf: "flex-end",
    bottom: "2em"
  }
});
