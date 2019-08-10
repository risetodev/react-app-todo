import React, { useState } from "react";
import { useGridCellStyles } from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { Checkbox, IconButton } from "@material-ui/core";
import { Input } from "../input/input";
import { useDispatch } from "react-redux";
import {
  addDoTo,
  dashboardDelete,
  editTitle,
  taskDelete
} from "../../Modules/redux/actions";
import { IDashboard } from "../../Modules/redux/types";
import uuid from "uuid/v4";

export const Dashboard: React.FC<IDashboard> = props => {
  const DashboardStyles = useGridCellStyles();

  const [isTaskDeleteButton, setTaskDeleteButton] = useState<number | null>(
    null
  );

  const handlerTaskDeleteButton = (index: number | null) => () =>
    setTaskDeleteButton(index);

  const dispatch = useDispatch();

  return (
    <div className={DashboardStyles.cell}>
      <div>
        <div className={DashboardStyles.titleContainer}>
          <Input
            placeholder={"Dashboard title"}
            className={DashboardStyles.title}
            defaultValue={props.title}
            onKeyDown={(event: any) => {
              if (event.key === "Enter") {
                dispatch(
                  editTitle({
                    dashboardId: props.id,
                    title: event.target.value
                  })
                );
                event.target.blur();
              }
            }}
          />
          <IconButton
            classes={{ root: DashboardStyles.taskDeleteIconRoot }}
            aria-label="Delete"
            onClick={() => dispatch(dashboardDelete(props.id))}
          >
            <DeleteIcon color={"disabled"} />
          </IconButton>
        </div>
        <div>
          {props.tasks.map((item, index) => (
            <div
              onMouseOver={handlerTaskDeleteButton(index)}
              onMouseLeave={handlerTaskDeleteButton(null)}
              key={index}
              className={DashboardStyles.task}
            >
              <Checkbox
                onChange={() => {
                  item.checked = !item.checked;
                }}
                classes={{ root: DashboardStyles.checkBoxRoot }}
                color="default"
                checked={item.checked}
                inputProps={{
                  "aria-label": "checkbox with default color"
                }}
              />
              <Input disabled={item.checked} defaultValue={item.description} />
              {isTaskDeleteButton === index && (
                <IconButton
                  classes={{ root: DashboardStyles.taskDeleteIconRoot }}
                  aria-label="Delete"
                  onClick={() =>
                    dispatch(
                      taskDelete({ dashboardId: props.id, taskId: item.id })
                    )
                  }
                >
                  <DeleteIcon color={"disabled"} fontSize={"small"} />
                </IconButton>
              )}
            </div>
          ))}
          <Input
            onKeyDown={(event: any) => {
              if (event.key === "Enter") {
                dispatch(
                  addDoTo({
                    dashboardId: props.id,
                    newTask: {
                      id: uuid(),
                      checked: false,
                      description: event.target.value
                    }
                  })
                );
                event.target.value = "";
                event.target.blur();
              }
            }}
            placeholder={"Add to-do"}
          />
        </div>
      </div>
    </div>
  );
};
