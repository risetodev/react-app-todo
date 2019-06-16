import React from "react";
import Fab, { FabProps } from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useButtonStyles } from "./styles";

export const Button: React.FC<FabProps> = (props) => {
  const ButtonStyles = useButtonStyles();
  return (
    <Fab {...props} classes={ButtonStyles}>
      <AddIcon />
    </Fab>
  );
};
