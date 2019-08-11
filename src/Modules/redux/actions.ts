import actionCreatorFactory from "typescript-fsa";
import { IDashboard, ITask } from "./types";

const actionCreator = actionCreatorFactory();

export const dashboardDelete = actionCreator<string>("DASHBOARD_DELETE");

export const taskDelete = actionCreator<{
  dashboardId: string;
  taskId: string;
}>("TASK_DELETE");

export const addDoTo = actionCreator<{
  dashboardId: string;
  newTask: ITask;
}>("ADD_TODO");

export const editTitle = actionCreator<{ dashboardId: string; title: string }>(
  "EDIT_TITLE"
);

export const addNewDashboard = actionCreator<IDashboard>("ADD_NEW_DASHBOARD");

export const editTask = actionCreator<{ dashboardId: string; task: ITask }>(
  "EDIT_TASK"
);
