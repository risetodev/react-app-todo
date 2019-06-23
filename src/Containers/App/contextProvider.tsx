import React, { useReducer } from "react";
import App from "./App";

const initialState: IState = {
  todo: [
    {
      title: "Misha zaebal",
      tasks: [
        { description: "Pochemu?", checked: false },
        { description: "Ibo ya nihuya", checked: false },
        { description: "ne ponimau", checked: false }
      ],
      deleteTask: false
    },
    {
      title: "Misha zaebal",
      tasks: [
        { description: "Pochemu?", checked: false },
        { description: "Ibo ya nihuya", checked: false },
        { description: "ne ponimau", checked: false }
      ],
      deleteTask: false
    },
    {
      title: "Misha zaebal",
      tasks: [
        { description: "Pochemu?", checked: false },
        { description: "Ibo ya nihuya", checked: false },
        { description: "ne ponimau", checked: false }
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
