export interface IDashboard {
  id: string;
  title: string;
  tasks: ITask[];
}

export interface ITask {
  id: string;
  checked: boolean;
  description: string;
}

export interface IState {
  dashboards: IDashboard[];
}
