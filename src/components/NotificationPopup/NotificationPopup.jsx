/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import axios from "axios";
import classNames from "classnames";
import { useNotification } from "../../hooks/useNotification";
import { GiProgression } from "react-icons/gi";

function NotificationPopup() {
  const [notification, setNotification] = useState(null);
  const { showNotification } = useNotification();
  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = generateRandomName();
      const randomAmount = generateRandomAmount();
      setNotification({ name: randomName, amount: randomAmount });

      setTimeout(() => {
        setNotification(null);
      }, 7000); // Popup will stay for 7 seconds
    }, 15000); // Popup will trigger every 15 seconds

    return () => clearInterval(interval);
  }, []);
  const generateRandomName = () => {
    const names = [
      "Alice",
      "George",
      "Charlie",
      "David",
      "Hukesh",
      "Frank",
      "Grace",
      "April",
      "Suarez",
      "Hamid",
      "Craig",
      "Steve",
      "Mccarthy",
      "Dustin",
      "Justin",
    ];
    return names[Math.floor(Math.random() * names.length)];
  };

  const generateRandomAmount = () => {
    return Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000; // Generate random amount between 1 and 1000
  };
  return (
    <div
      className={classNames(
        "fixed  h-[70px] flex items-center justify-center  left-0 top-[30%] bg-slate-950 rounded-md text-white font-montserrat  shadow",
        {
          "translate-x-0": showNotification,
          "-translate-x-[110%]": !showNotification,
        }
      )}
      style={{ transition: "transform 0.5s ease" }}
    >
      {/* {notification && (
      <p className="font-bold">
        {notification &&
          `${notification?.name} just earned $${notification?.amount}`}
      </p>
      )} */}
      {notification && (
        <div className="flex items-center px-2 py-4 justify-center space-x-2 ">
          <GiProgression size={20} color="green" />
          <p>
            {/* {notification?.name} just earned ${notification?.amount} */}
            {notification?.name} just earned ${generateRandomAmount()}
          </p>
        </div>
      )}
    </div>
  );
}

export default NotificationPopup;
