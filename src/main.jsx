import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../index.css";
import { ProfileProvider } from "./context/ProfileContext";
import { PainProvider } from "./context/PainContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProfileProvider>
      <PainProvider>
        <App />
      </PainProvider>
    </ProfileProvider>
  </React.StrictMode>
);
