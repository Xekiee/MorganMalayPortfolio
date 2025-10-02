import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./portfolio.css";
import { ThemeProvider } from "./DarkLight.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="magicpattern">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </div>
  </StrictMode>
);
