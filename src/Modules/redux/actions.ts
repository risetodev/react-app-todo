import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const dashboardDelete = actionCreator<string>("DASHBOARD_DELETE");

export const taskDelete = actionCreator<{
  dashboardId: string;
  taskId: string;
}>("TASK_DELETE");
