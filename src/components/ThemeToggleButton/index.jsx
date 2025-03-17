import React from "react";
import useTheme from "../../hooks/useTheme";
import { VscColorMode } from "react-icons/vsc";
import { Button } from "./style";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      <VscColorMode />
    </Button>
  );
};

export default ThemeToggleButton;