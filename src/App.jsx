import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter basename="/pokedex">
        <AppRoutes />
      </BrowserRouter>
    </StyledThemeProvider>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
