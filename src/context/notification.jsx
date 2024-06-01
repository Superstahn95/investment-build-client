/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 7000); // notification stays for 7 secons
    }, 15000); // repeats every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <NotificationContext.Provider
      value={{ showNotification, setShowNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
