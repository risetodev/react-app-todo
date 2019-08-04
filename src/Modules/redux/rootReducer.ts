import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IState } from "./types";
import uuid from "uuid/v4";
import { dashboardDelete, taskDelete } from "./actions";

const INITIAL_STATE: IState = {
  dashboards: [
    {
      id: uuid(),
      title: "Grocery",
      tasks: [
        { id: uuid(), description: "Juice", checked: false },
        { id: uuid(), description: "Apple", checked: false },
        { id: uuid(), description: "Bread", checked: false }
      ]
    }
  ]
};

// export const rootReducer = (state: IState = INITIAL_STATE, action: IReducerAction) => {
//   switch (action.type) {
//     case "UPDATE":
//       console.log("State changed: UPDATE");
//       return { ...state };
//     case "DELETE_TASK":
//       console.log("State changed: DELETE_TASK");
//       return { ...state };
//     case "DELETE_DASHBOARD":
//       console.log("State changed: DELETE_DASHBOARD");
//       return { ...state };
//     default:
//       return state;
//   }
// };

export const rootReducer = reducerWithInitialState(INITIAL_STATE)
  .case(dashboardDelete, (state, payload) => ({
    dashboards: state.dashboards.filter(item => item.id !== payload)
  }))
  .case(taskDelete, (state, { dashboardId, taskId }) => ({
    dashboards: state.dashboards.map(item =>
      item.id === dashboardId
        ? {
            ...item,
            tasks: item.tasks.filter(item => item.id !== taskId)
          }
        : item
    )
  }));
