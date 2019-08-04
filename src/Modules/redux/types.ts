export interface IDashboard {
  id: string;
  title: string;
  tasks: ITasks[];
}

export interface ITasks {
  id: string;
  checked: boolean;
  description: string;
}

export interface IState {
  dashboards: IDashboard[];
}
