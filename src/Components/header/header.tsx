import React from "react";
import { Logo } from "../../assets/icons/logo/logo";
import { useHeaderStyles } from "./styles";

export const Header: React.FC = () => {
  const headerStyle = useHeaderStyles();
  return (
    <div className={headerStyle.header}>
      <Logo size={30} />
      <div className={headerStyle.titleName}>
        <h1>To</h1>
        <div className={headerStyle.titleLine} />
        <h1>Do</h1>
      </div>
    </div>
  );
};
