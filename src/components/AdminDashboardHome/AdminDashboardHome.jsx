import axios from "axios";
import { useEffect, useState } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import {
  ArrowDownTrayIcon,
  LockClosedIcon,
  UsersIcon,
  CircleStackIcon,
  ArrowUpTrayIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

function AdminDashboardHome() {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dashboardStats, setDashboardStats] = useState({
    totalDeposits: "",
    pendingDeposits: "",
    totalUsers: "",
    totalPlans: "",
  });
  const getDashboardStats = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}dashboard-summary`,
        {
          withCredentials: true,
        }
      );
      console.log(data);
      setDashboardStats((prevState) => ({
        ...prevState,
        totalDeposits: data.totalDeposits,
        pendingDeposits: data.pendingDeposits,
        totalPlans: data.totalPlans,
        totalUsers: data.totalUsers,
      }));
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // fecth dashboard stats from backend
    getDashboardStats();
  }, []);

  //handle error ui return properly
  if (isError) {
    return (
      <div>
        <h2>Unable to fetch details at the moment.</h2>{" "}
        <button onClick={getDashboardStats}>Click to retry</button>{" "}
      </div>
    );
  }
  return (
    <>
      <h1 className="text-gray-700 text-3xl mb-16 font-bold dark:text-white font-montserrat">
        Dashboard
      </h1>
      {loading ? (
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div>Skeleton component</div>
          <div>Skeleton component</div>
          <div>Skeleton component</div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <ContentWrapper
            icon={<ArrowDownTrayIcon className="text-white h-10 w-10" />}
            iconBgColor={"bg-green-400"}
            number={dashboardStats.totalDeposits}
            text={"Total Deposits"}
            isMoney
          />
          <ContentWrapper
            icon={<LockClosedIcon className="text-white h-10 w-10" />}
            iconBgColor={"bg-blue-500"}
            number={dashboardStats.pendingDeposits}
            text={"Pending Deposits"}
            isMoney
          />

          <ContentWrapper
            icon={<UsersIcon className="text-white h-10 w-10" />}
            iconBgColor={"bg-red-500"}
            number={dashboardStats.totalUsers}
            text={"Total Users"}
          />
          <ContentWrapper
            icon={<CircleStackIcon className="text-white h-10 w-10" />}
            iconBgColor={"bg-orange-500"}
            number={dashboardStats.totalPlans}
            text={"Investment Plans"}
          />
          <ContentWrapper
            icon={<ArrowUpTrayIcon className="text-white h-10 w-10" />}
            iconBgColor={"bg-sky-900"}
            number={3000}
            text={"Pending Withdrawals"}
            isMoney
          />
          <ContentWrapper
            icon={<BanknotesIcon className="text-white h-10 w-10" />}
            iconBgColor={"bg-purple-500"}
            number={5000}
            text={"Total Withdrawals"}
            isMoney
          />
        </div>
      )}
    </>
  );
}

export default AdminDashboardHome;
