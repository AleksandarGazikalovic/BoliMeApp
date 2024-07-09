import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../index.css";
import { ProfileProvider } from "./context/ProfileContext";
import { PainProvider } from "./context/PainContext";
import { AuthProvider } from "./context/AuthContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <PainProvider>
          <App />
        </PainProvider>
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>
);
