import React, { useContext } from "react";
import { Header } from "../../Components/header/header";
import { Container } from "@material-ui/core";
import { Button } from "../../Components/button/button";
import { useAppStyles } from "./styles";
import { Dashboard } from "../../Components/dashboard/dashboard";
import AddIcon from "@material-ui/icons/Add";
import { IDashboard, TaskContext } from "./contextProvider";

const App: React.FC = () => {
  const appStyles = useAppStyles();
  const { state } = useContext(TaskContext);

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
      <Button className={appStyles.newTaskButton} color="primary">
        <AddIcon />
      </Button>
    </Container>
  );
};

export default App;
