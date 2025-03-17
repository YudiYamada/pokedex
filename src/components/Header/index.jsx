import React from "react";
import ThemeToggleButton from "../ThemeToggleButton";
import useTheme from "../../hooks/useTheme";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      style={{
        background: theme.background,
        color: theme.text,
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src="/images/logo.png"
        alt="Logo"
        style={{ height: "40px" }}
      />
      <label>
        <input
          type="text"
          placeholder="Pesquisar..."
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: `1px solid ${theme.text}`,
            color: theme.text,
            background: theme.background,
          }}
        />
      </label>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
