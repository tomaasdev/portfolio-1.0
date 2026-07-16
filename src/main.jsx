import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/App.css";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
