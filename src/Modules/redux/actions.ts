import actionCreatorFactory from "typescript-fsa";
import { IDashboard, ITasks } from "./types";

const actionCreator = actionCreatorFactory();

export const dashboardDelete = actionCreator<string>("DASHBOARD_DELETE");

export const taskDelete = actionCreator<{
  dashboardId: string;
  taskId: string;
}>("TASK_DELETE");

export const addDoTo = actionCreator<{
  dashboardId: string;
  newTask: ITasks;
}>("ADD_TODO");

export const editTitle = actionCreator<{ dashboardId: string; title: string }>(
  "EDIT_TITLE"
);

export const addNewDashboard = actionCreator<IDashboard>("ADD_NEW_DASHBOARD");
