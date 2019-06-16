import React from "react";
import "./App.css";
import { Header } from "../../Components/header/header";
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <Container maxWidth={"md"}>
      <Header/>

    </Container>
  );
};

export default App;
