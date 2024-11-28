import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MoviesProvider } from "../Context/MoviesContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </StrictMode>
);
