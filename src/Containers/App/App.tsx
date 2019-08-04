import React, { useState } from "react";
import { Header } from "../../Components/header/header";
import { Container } from "@material-ui/core";
import { Button } from "../../Components/button/button";
import { useAppStyles } from "./styles";
import AddIcon from "@material-ui/icons/Add";
import { DashboardsList } from "../../Components/dashboardsList/DashboardsList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../Modules/redux/rootReducer";
import { Sidebar } from "../../Components/sidebar/Sidebar";

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const App: React.FC = () => {
  const [isAddTaskVisible, setAddTaskVisible] = useState<boolean>(false);
  const appStyles = useAppStyles({ isAddTaskVisible });
  const addTaskHandler = () => setAddTaskVisible(open => !open);

  return (
    <Provider store={store}>
      <Container className={appStyles.container} maxWidth={"md"}>
        <Header />
        <DashboardsList />
        <Button
          className={appStyles.newTaskButton}
          color="primary"
          onClick={addTaskHandler}
        >
          <AddIcon />
        </Button>
        <Sidebar
          addTaskHandler={addTaskHandler}
          isAddTaskVisible={isAddTaskVisible}
        />
      </Container>
    </Provider>
  );
};

export default App;
