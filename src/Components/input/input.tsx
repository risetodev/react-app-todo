import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import { useInputStyles } from "./styles";
import { InputBaseProps } from "@material-ui/core/InputBase";

export const Input: React.FC<InputBaseProps> = ({ ...props }) => {
  const [isUnderLine, setUnderLine] = useState(false);
  const handlerInputUnderLine = () => setUnderLine(prevState => !prevState);
  const InputStyles = useInputStyles({ isUnderLine });
  return (
    <InputBase
      {...props}
      onFocus={handlerInputUnderLine}
      onBlur={handlerInputUnderLine}
      classes={InputStyles}
    />
  );
};
