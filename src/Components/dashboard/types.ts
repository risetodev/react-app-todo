export interface IDashboardProps {
  title: string,
  tasks: ITasks[],
  deleteTask: boolean,
}

interface ITasks {
  checked: boolean,
  description: string
}
