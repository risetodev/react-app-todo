import React from "react";
import { useAppStyles } from "./styles";
import { Dashboard } from "../dashboard/dashboard";
import { useSelector } from "react-redux";
import { IDashboard, IState } from "../../Modules/redux/types";

export const DashboardsList: React.FC = () => {
  const appStyles = useAppStyles();

  const dashboards = useSelector<IState, IDashboard[]>(
    state => state.dashboards
  );

  return (
    <div className={appStyles.grid}>
      {dashboards.map((item: IDashboard) => (
        <Dashboard
          key={item.id}
          id={item.id}
          title={item.title}
          tasks={item.tasks}
        />
      ))}
    </div>
  );
};
