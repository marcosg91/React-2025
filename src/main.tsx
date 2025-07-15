import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext"; 
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </Router>
  </StrictMode>
);
