import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownTrayIcon,
  LockClosedIcon,
  UsersIcon,
  CircleStackIcon,
  ArrowUpTrayIcon,
  BanknotesIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import AllTransactions from "../AllTransactions/AllTransactions";
import Refetch from "../Refetch/Refetch";

function AdminDashboardHome() {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dashboardStats, setDashboardStats] = useState({
    totalDeposits: "",
    pendingDeposits: "",
    totalUsers: "",
    totalPlans: "",
    pendingWithdrawal: "",
    paidWithdrawal: "",
  });
  const getDashboardStats = async () => {
    setIsError(false);
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}dashboard-summary`,
        {
          withCredentials: true,
        }
      );
      setDashboardStats((prevState) => ({
        ...prevState,
        totalDeposits: data.totalDeposits,
        pendingDeposits: data.pendingDeposits,
        totalPlans: data.totalPlans,
        totalUsers: data.totalUsers,
        pendingWithdrawal: data.pendingWithdrawal,
        paidWithdrawal: data.paidWithdrawal,
      }));
    } catch (error) {
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
      <Refetch
        handleRetry={getDashboardStats}
        text="We were unable to get platform statistics."
      />
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
            number={dashboardStats.pendingWithdrawal}
            text={"Pending Withdrawals"}
            isMoney
          />
          <ContentWrapper
            icon={<BanknotesIcon className="text-white h-10 w-10" />}
            iconBgColor={"bg-purple-500"}
            number={dashboardStats.paidWithdrawal}
            text={"Total Withdrawals"}
            isMoney
          />
        </div>
      )}
      <div className="grid col-1 bg-white min-h-64 max-h-[400px] overflow-scroll shadow-sm dark:bg-slate-800  p-4">
        <div className="flex flex-col">
          <Link
            to="transactions"
            className="self-end text-sm text-red-400 uppercase  flex items-center space-x-2"
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4 text-red-400 " />
            check deposits
          </Link>
          {/* user transaction table */}
          <AllTransactions />
        </div>
      </div>
    </>
  );
}

export default AdminDashboardHome;
