import { VscColorMode } from "react-icons/vsc";
import { useTheme } from "../../contexts/ThemeContext";
import { Button } from "./ThemeToggleButtonStyles";

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button onClick={toggleTheme} theme={theme}>
      <VscColorMode />
    </Button>
  );
};

export default ThemeToggleButton;
