import { makeStyles } from "@material-ui/core";

interface IAddTaskButton {
  isAddTaskVisible: boolean;
}

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
  },
  AddTaskForm: {
    height: "100vh",
    width: (props: IAddTaskButton) => (props.isAddTaskVisible ? "40vw" : 0),
    position: "fixed",
    padding: (props: IAddTaskButton) =>
      props.isAddTaskVisible ? "0 2em 0 2em" : 0,
    zIndex: 999,
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    overflowX: "hidden",
    transition: "0.5s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  AddTaskFormEffect: {
    height: "100vh",
    width: (props: IAddTaskButton) => (props.isAddTaskVisible ? "60vw" : 0),
    position: "fixed",
    zIndex: 999,
    top: 0,
    left: 0,
    backgroundColor: "grey",
    overflowX: "hidden",
    transition: "0.5s",
    opacity: 0.5
  },
  closeAddTaskFrom: {
   //lignSelf: "flex-end",
    fontSize: "4em",
    color: "#000",
    textDecoration: "none",
    visibility: (props: IAddTaskButton) =>
      props.isAddTaskVisible ? "visible" : "hidden"
  },
  AddTaskFormTitle: {
    "& input": {
      fontSize: "1.5rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#000"
    }
  }
});
