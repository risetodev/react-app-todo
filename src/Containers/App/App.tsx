import React, { useContext, useState } from "react";
import { Header } from "../../Components/header/header";
import { Container } from "@material-ui/core";
import { Button } from "../../Components/button/button";
import { useAppStyles } from "./styles";
import { Dashboard } from "../../Components/dashboard/dashboard";
import AddIcon from "@material-ui/icons/Add";
import { IDashboard, TaskContext } from "./contextProvider";
import { Input } from "../../Components/input/input";

const App: React.FC = () => {
  const [isAddTaskVisible, setAddTaskVisible] = useState<boolean>(false);
  const appStyles = useAppStyles({ isAddTaskVisible });
  const { state } = useContext(TaskContext);
  const [task, setTask] = useState("");

  const handlerEnterKeyPress = (event: any) => {
    event.key === "Enter" && setTask(event.target.value);
  };

  const addTaskHandler = () => {
    if (isAddTaskVisible) {
      setAddTaskVisible(false);
    } else {
      setAddTaskVisible(true);
    }
  };

  return (
    <Container className={appStyles.container} maxWidth={"md"}>
      <Header />
      <div className={appStyles.grid}>
        {state.todo.map((item: IDashboard, index: number) => (
          <Dashboard
            key={index}
            title={item.title}
            deleteTask={false}
            tasks={item.tasks}
          />
        ))}
      </div>
      <Button
        className={appStyles.newTaskButton}
        color="primary"
        onClick={addTaskHandler}
      >
        <AddIcon />
      </Button>

      <div className={appStyles.AddTaskForm}>
        <div>
          <a
            href="javascript:void(0)"
            className={appStyles.closeAddTaskFrom}
            onClick={addTaskHandler}
          >
            &times;
          </a>
          <Input
            className={appStyles.AddTaskFormTitle}
            description={""}
            placeholder={"Add title"}
          />
          <Input
            onKeyDown={handlerEnterKeyPress}
            description={""}
            placeholder={"Add to-do"}
          />
        </div>
        <Button>Add</Button>
      </div>
      <div className={appStyles.AddTaskFormEffect} />
    </Container>
  );
};

export default App;
