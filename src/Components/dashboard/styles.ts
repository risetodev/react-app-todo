import { makeStyles } from "@material-ui/core";

export const useGridCellStyles = makeStyles({
  cell: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: "1em",
    flex: "0 1 calc(50% - 1em - 5px)",
    margin: "5px"
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    "& input": {
      fontSize: "1.5rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#000"
    }
  },
  deleteIcon: {
    cursor: "pointer"
  },
  task: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "1em"
  },

  checkBoxRoot: {
    padding: 4
  },
  taskDeleteIconRoot: {
    color: "grey",
    padding: 4
  }
});
