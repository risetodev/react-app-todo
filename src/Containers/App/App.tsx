import React from "react";
import { Header } from "../../Components/header/header";
import { Container } from "@material-ui/core";
import { Button } from "../../Components/button/button";
import { useAppStyles } from "./styles";

const App: React.FC = () => {
  const appStyles = useAppStyles();
  return (
    <Container className={appStyles.container} maxWidth={"md"}>
      <Header />

      <Button className={appStyles.newTaskButton} color="primary" />
    </Container>
  );
};

export default App;
