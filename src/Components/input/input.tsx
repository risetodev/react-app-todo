import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import { useInputStyles } from "./styles";
import { IInput } from "./types";

export const Input: React.FC<IInput> = ({ description, ...props }) => {
  const [isUnderLine, setUnderLine] = useState(false);
  const handlerInputUnderLine = () => setUnderLine(prevState => !prevState);
  const InputStyles = useInputStyles({ isUnderLine });
  return (
    <InputBase
      {...props}
      onFocus={handlerInputUnderLine}
      onBlur={handlerInputUnderLine}
      classes={InputStyles}
      defaultValue={description}
    />
  );
};
