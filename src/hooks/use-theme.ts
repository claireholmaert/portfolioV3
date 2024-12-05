// react
import { useContext } from "react";

// context
import { ThemeProviderContext } from "../context/theme-context";

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
