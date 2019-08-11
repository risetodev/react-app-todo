import { Input } from "../input/input";
import { Button } from "../button/button";
import React, { useCallback, useState } from "react";
import { useAppStyles } from "./styles";
import { useDispatch } from "react-redux";
import { addNewDashboard } from "../../Modules/redux/actions";
import uuid from "uuid/v4";
import { ITask } from "../../Modules/redux/types";

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
  const [tasks, setTasks] = useState<ITask[]>([]);
  const dispatch = useDispatch();
  const addTask = useCallback(() => addTaskHandler(), [addTaskHandler]);
  const titleEdit = useCallback((event: any) => {
    setTitle(event.target.value);
  }, []);
  const taskEdit = useCallback(
    item => (event: any) => {
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
    },
    [tasks]
  );
  const addNewTask = useCallback(
    (event: any) => {
      if (event.target.value) {
        setTasks([
          ...tasks,
          {
            id: uuid(),
            description: event.target.value,
            checked: false
          }
        ]);
        event.target.value = "";
      }
    },
    [tasks]
  );
  const addDashboard = useCallback(() => {
    dispatch(addNewDashboard({ tasks, title, id: uuid() }));
    setTasks([]);
    setTitle("");
  }, [dispatch, tasks, title]);

  return (
    <>
      <div className={appStyles.AddTaskForm}>
        <span>
          <button onClick={addTask} className={appStyles.closeAddTaskFrom}>
            +
          </button>
        </span>
        <div>
          <Input
            onChange={titleEdit}
            className={appStyles.AddTaskFormTitle}
            placeholder="Add title"
            value={title}
          />
          {tasks.map((item, index) => (
            <Input
              key={index}
              defaultValue={item.description}
              onBlur={taskEdit(item)}
            />
          ))}
          <Input onBlur={addNewTask} placeholder="Add to-do" />
        </div>

        <Button disabled={!title} onClick={addDashboard}>
          Add
        </Button>
      </div>
      <div className={appStyles.AddTaskFormEffect} />
    </>
  );
};
