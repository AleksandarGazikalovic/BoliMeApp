import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../index.css";
import { ProfileProvider } from "./context/ProfileContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </React.StrictMode>
);
