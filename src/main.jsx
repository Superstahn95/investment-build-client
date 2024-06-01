import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./context/auth";
import ThemeProvider from "./context/theme.jsx";
import NotificationProvider from "./context/notification.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
