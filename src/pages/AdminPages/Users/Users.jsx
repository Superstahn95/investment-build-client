import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "../../../components/Table/Table";
import { ToastContainer, toast } from "react-toastify";
import toastifyConfig from "../../../utils/toastify";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
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

  const columns = [
    { name: "Name", selector: (row) => row.name },
    { name: "Email", selector: (row) => row.email },
    { name: "Total Deposits", selector: (row) => row.totalDeposit },
    { name: "Pending Deposit", selector: (row) => row.pendingDeposit },
    {
      name: "Action",
      cell: (row) => (
        <Link
          to={`${row._id}`}
          className="bg-orange-500 text-white px-3 py-2 rounded-md"
        >
          Manage
        </Link>
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
