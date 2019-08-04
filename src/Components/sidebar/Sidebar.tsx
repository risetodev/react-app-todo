import { Input } from "../input/input";
import { Button } from "../button/button";
import React from "react";
import { useAppStyles } from "./styles";

interface ISideBarProps {
  isAddTaskVisible: boolean;
  addTaskHandler: () => void;
}

export const Sidebar: React.FC<ISideBarProps> = ({
  isAddTaskVisible,
  addTaskHandler
}) => {
  const handlerEnterKeyPress = (event: any) => {
    event.key === "Enter" && console.log("enter");
  };
  const appStyles = useAppStyles({ isAddTaskVisible });
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
            onKeyDown={handlerEnterKeyPress}
            className={appStyles.AddTaskFormTitle}
            defaultValue=""
            placeholder="Add title"
          />
          <Input
            onKeyDown={handlerEnterKeyPress}
            defaultValue=""
            placeholder="Add to-do"
          />
        </div>
        <Button>Add</Button>
      </div>
      <div className={appStyles.AddTaskFormEffect} />
    </>
  );
};
