import React, { useCallback, useState } from "react";
import { InputBase } from "@material-ui/core";
import { useInputStyles } from "./styles";
import { InputBaseProps } from "@material-ui/core/InputBase";

export const Input: React.FC<
  InputBaseProps & { onBlur?: (e: any) => void }
> = ({ onBlur, ...props }) => {
  const [isUnderLine, setUnderLine] = useState(false);
  const handlerInputUnderLine = () => setUnderLine(prevState => !prevState);
  const InputStyles = useInputStyles({ isUnderLine });
  const handlerBlur = useCallback(
    (event: any) => {
      onBlur && onBlur(event);
      handlerInputUnderLine();
    },
    [onBlur]
  );
  return (
    <InputBase
      {...props}
      onFocus={handlerInputUnderLine}
      onBlur={handlerBlur}
      classes={InputStyles}
    />
  );
};
