import React from "react";
import { Header } from "../../Components/header/header";
import { Container } from "@material-ui/core";
import { Button } from "../../Components/button/button";
import { useAppStyles } from "./styles";
import { Dashboard } from "../../Components/dashboard/dashboard";
import AddIcon from "@material-ui/icons/Add";

const App: React.FC = () => {
  const appStyles = useAppStyles();
  return (
    <Container className={appStyles.container} maxWidth={"md"}>
      <Header />
      <div className={appStyles.grid}>
        <Dashboard
          title={"Title"}
          deleteTask={false}
          tasks={[{ checked: true, description: "John Doe" },
            { checked: true, description: "John Doe" },
            { checked: true, description: "John Doe" },
            { checked: true, description: "John Doe" }]}
        />
      </div>
      <Button className={appStyles.newTaskButton} color="primary">
        <AddIcon />
      </Button>
    </Container>
  );
};

export default App;
