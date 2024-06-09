import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LuLoader2 } from "react-icons/lu";
import Table from "../../../components/Table/Table";
import { ToastContainer, toast } from "react-toastify";
import toastifyConfig from "../../../utils/toastify";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadingRows, setLoadingRows] = useState({
    authorize: {},
    withdrawalStatus: {},
  });
  const getUsers = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}users`
      );
      console.log(data);
      setUsers(data.users);
    } catch (error) {
      console.log(error);
      setError(true);
      toast.error(error.response.data.message || "error", toastifyConfig);
    } finally {
      setIsLoading(false);
    }
  };
  const toggleStatus = async (id) => {
    const newLoadingRows = { ...loadingRows };
    newLoadingRows["withdrawalStatus"][id] = true;
    setLoadingRows(newLoadingRows);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}users/toggle/${id}`
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id
            ? {
                ...user,
                isRestrictedFromWithdrawal: !user.isRestrictedFromWithdrawal,
              }
            : user
        )
      );
      console.log("new user state");
      console.log(users);
      toast.success(data.message, toastifyConfig);
      //edit the users state
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, toastifyConfig);
    } finally {
      newLoadingRows.withdrawalStatus[id] = false;
      // delete[id] = false;
    }
  };
  const authorizeUser = async (id) => {
    const newLoadingRows = { ...loadingRows };
    newLoadingRows["authorize"][id] = true;
    setLoadingRows(newLoadingRows);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}users/status/${id}`
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id
            ? {
                ...user,
                isAuthorized: !user.isAuthorized,
              }
            : user
        )
      );
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, toastifyConfig);
    } finally {
      newLoadingRows.authorize[id] = false;
      setLoadingRows(newLoadingRows);
    }
  };

  const columns = [
    { name: "Name", selector: (row) => row.name },
    { name: "Email", selector: (row) => row.email },
    { name: "Total Deposits", selector: (row) => row.totalDeposit },
    { name: "Pending Deposit", selector: (row) => row.pendingDeposit },
    {
      name: "Action",
      cell: (row) => (
        <Link to={`${row._id}`} className=" text-red-400 px-3 py-2 rounded-md">
          Manage
        </Link>
      ),
    },
    {
      name: "Withdrawal Status",
      cell: (row) => (
        <button
          onClick={() => toggleStatus(row._id)}
          className={`${
            row.isRestrictedFromWithdrawal ? "bg-red-500" : "bg-green-500"
          } bg-orange-500 text-white px-3 py-2 rounded-md cursor-pointer`}
        >
          {loadingRows.withdrawalStatus[row._id] ? (
            <LuLoader2 className="animate-spin" />
          ) : row.isRestrictedFromWithdrawal ? (
            "Unrestrict"
          ) : (
            "restrict"
          )}
          {/* {row.isRestrictedFromWithdrawal ? "Unrestrict" : "restrict"} */}
        </button>
      ),
    },
    {
      name: "Access Status",
      cell: (row) => (
        <button
          onClick={() => authorizeUser(row._id)}
          className={`${
            row.isAuthorized ? "bg-red-500" : "bg-green-500"
          } bg-orange-500 text-white px-3 py-2 rounded-md cursor-pointer`}
        >
          {loadingRows.authorize[row._id] ? (
            <LuLoader2 className="animate-spin" />
          ) : row.isAuthorized ? (
            "Revoke access"
          ) : (
            "Grant access"
          )}
          {/* {row.isAuthorized ? "Revoke access" : "Grant access"} */}
        </button>
      ),
    },
  ];

  useEffect(() => {
    getUsers();
  }, []);
  if (error) {
    return (
      <div>
        <p>Something went wrong</p> <button onClick={getUsers}>Retry</button>
      </div>
    );
  }
  return (
    //handle suitable skeleton component for the loader state

    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold dark:text-white font-montserrat">
        Platform Users
      </p>
      {isLoading ? (
        <div> Loading.... </div>
      ) : users ? (
        <div className="grid col-1 bg-white shadow-sm dark:bg-slate-800 font-montserrat">
          <Table tableHeaders={columns} tableDetails={users} />
        </div>
      ) : (
        <p>No user data available</p>
      )}
      <ToastContainer />
    </>
  );
}

export default Users;
