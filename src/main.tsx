import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./config/queryClient";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PlayerProvider>
        <Router>
          <App />
        </Router>
      </PlayerProvider>
    </QueryClientProvider>
  </StrictMode>
);
