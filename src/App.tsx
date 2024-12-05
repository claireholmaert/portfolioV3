import { BrowserRouter } from "react-router-dom";

// components
import { ThemeProvider } from "@/components/theme-provider";

// pages
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Home />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
