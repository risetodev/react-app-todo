import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IState } from "./types";
import uuid from "uuid/v4";
import {
  dashboardDelete,
  taskDelete,
  addDoTo,
  editTitle,
  addNewDashboard,
  editTask
} from "./actions";

const INITIAL_STATE: IState = {
  dashboards: [
    {
      id: uuid(),
      title: "Groceries for lunch",
      tasks: [
        { id: uuid(), description: "Apple", checked: false },
        { id: uuid(), description: "Juice", checked: false },
        { id: uuid(), description: "Bread", checked: true },
        { id: uuid(), description: "Eggs", checked: false }
      ]
    }
  ]
};

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
  }))
  .case(addDoTo, (state, payload) => ({
    dashboards: state.dashboards.map(item =>
      item.id === payload.dashboardId
        ? {
            ...item,
            tasks: [
              ...item.tasks,
              {
                id: payload.newTask.id,
                checked: payload.newTask.checked,
                description: payload.newTask.description
              }
            ]
          }
        : item
    )
  }))
  .case(editTitle, (state, payload) => ({
    dashboards: state.dashboards.map(item =>
      item.id === payload.dashboardId ? { ...item, title: payload.title } : item
    )
  }))
  .case(addNewDashboard, (state, payload) => ({
    dashboards: [
      ...state.dashboards,
      {
        id: payload.id,
        title: payload.title,
        tasks: payload.tasks
      }
    ]
  }))
  .case(editTask, (state, payload) => ({
    dashboards: state.dashboards.map(item =>
      item.id === payload.dashboardId
        ? {
            ...item,
            tasks: item.tasks.map(task =>
              task.id === payload.task.id
                ? {
                    ...task,
                    description: payload.task.description,
                    checked: payload.task.checked
                  }
                : task
            )
          }
        : item
    )
  }));
