import { Input } from "../input/input";
import { Button } from "../button/button";
import React, { useState } from "react";
import { useAppStyles } from "./styles";
import { useDispatch } from "react-redux";
import { addNewDashboard } from "../../Modules/redux/actions";
import uuid from "uuid/v4";
import { ITasks } from "../../Modules/redux/types";

interface ISideBarProps {
  isAddTaskVisible: boolean;
  addTaskHandler: () => void;
}

export const Sidebar: React.FC<ISideBarProps> = ({
  isAddTaskVisible,
  addTaskHandler
}) => {
  const appStyles = useAppStyles({ isAddTaskVisible });
  const [title, setTitle] = useState<string>("");
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const dispatch = useDispatch();

  return (
    <>
      <div className={appStyles.AddTaskForm}>
        <a
          href="javascript:void(0)"
          className={appStyles.closeAddTaskFrom}
          onClick={() => addTaskHandler()}
        >
          &times;
        </a>
        <div>
          <Input
            onChange={(event: any) => {
              setTitle(event.target.value);
            }}
            className={appStyles.AddTaskFormTitle}
            placeholder="Add title"
            value={title}
          />
          {tasks.map((item, index) => (
            <Input
              key={index}
              defaultValue={item.description}
              onBlur={(event: any) => {
                setTasks(
                  tasks.map(task =>
                    task.id === item.id
                      ? {
                          ...task,
                          description: event.target.value
                        }
                      : task
                  )
                );
              }}
            />
          ))}
          <Input
            onBlur={(event: any) => {
              setTasks([
                ...tasks,
                {
                  id: uuid(),
                  description: event.target.value,
                  checked: false
                }
              ]);
              event.target.value = "";
            }}
            placeholder="Add to-do"
          />
        </div>

        <Button
          disabled={!title}
          onClick={() => {
            dispatch(addNewDashboard({ tasks, title, id: uuid() }));
            setTasks([]);
            setTitle("");
          }}
        >
          Add
        </Button>
      </div>
      <div className={appStyles.AddTaskFormEffect} />
    </>
  );
};
