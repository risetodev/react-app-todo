import React, { useReducer } from "react";
import App from "./App";

const initialState: IState = {
  todo: [
    {
      title: "Grocery",
      tasks: [
        { description: "Juice", checked: false },
        { description: "Apple", checked: false },
        { description: "Bread", checked: false }
      ],
      deleteTask: false
    }
  ]
};

export const TaskContext = React.createContext<{
  state: IState;
  dispatch: any;
}>({
  state: initialState,
  dispatch: null
});

export interface IDashboard {
  title: string;
  tasks: ITasks[];
  deleteTask: boolean;
}

export interface ITasks {
  checked: boolean;
  description: string;
}

export interface IState {
  todo: IDashboard[];
}

interface IReducerAction {
  type: string;
  payload: any;
}

const reducer = (state: IState, action: IReducerAction) => {
  switch (action.type) {
    case "update":
      console.log("State changed: update");
      return { ...state };
    case "deleteTask":
      console.log("State changed: deleteTask");
      return { ...state };
    case "deleteDashboard":
      console.log("State changed: deleteDashboard");
      return { ...state };
    default:
      return state;
  }
};

export const TaskContextProvider: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <App />
    </TaskContext.Provider>
  );
};
