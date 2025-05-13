import { VscColorMode } from "react-icons/vsc";
import { useTheme } from "../../contexts/ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button onClick={toggleTheme} theme={theme}>
      <VscColorMode />
    </button>
  );
};

export default ThemeToggleButton;
