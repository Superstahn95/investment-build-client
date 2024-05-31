/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fetching data and displaying notification
      const user = "John"; // Fetch user's name
      const amount = Math.floor(Math.random() * 1000); // Random amount earned
      setNotification({ user, amount });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
