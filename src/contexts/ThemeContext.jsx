import { createContext, useState, useContext } from "react";
import { themes } from "../styles/theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.lightTheme ? themes.darkTheme : themes.lightTheme
    );
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
