import { makeStyles } from "@material-ui/core";

export const useHeaderStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    paddingTop: "2em",
    paddingBlock: "2em"
  },
  titleName: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    "& h1": {
      margin: 5,
      fontSize: "2em"
    }
  },
  titleLine: {
    backgroundColor: "#000",
    height: "5px",
    flex: 1
  }
});
