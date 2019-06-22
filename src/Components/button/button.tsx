import React from "react";
import Fab, { FabProps } from "@material-ui/core/Fab";

import { useButtonStyles } from "./styles";

export const Button: React.FC<FabProps> = (props) => {
  const ButtonStyles = useButtonStyles();
  return (
    <Fab {...props} classes={ButtonStyles}>
      {props.children}
    </Fab>
  );
};
