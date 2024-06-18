import { useEffect, useState } from "react";
import axios from "axios";
import { LuLoader2 } from "react-icons/lu";
import dateFormat from "dateformat";
import Table from "../Table/Table";
import Refetch from "../Refetch/Refetch";
function UserTransactions() {
  const [transactions, setTransactions] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getTransactionHistory = async () => {
    setError(false);
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}transaction`,
        {
          withCredentials: true,
        }
      );
      setTransactions(data.transactions);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTransactionHistory();
  }, []);

  const columns = [
    {
      name: "Date",
      selector: (row) => dateFormat(row.createdAt, "mediumDate"),
    },
    {
      name: "Type",
      selector: (row) => (
        <div
          className={`${
            row.type === "deposit" ? "text-red-500" : "text-green-500"
          }`}
        >
          {row.type}{" "}
        </div>
      ),
    },
    { name: "Amount", selector: (row) => row.amount },
  ];

  //make a separate error display component
  if (error) {
    return (
      <Refetch
        text={"we were unable to get your transactions"}
        handleRetry={getTransactionHistory}
      />
    );
  }
  if (transactions && transactions.length < 1) {
    return (
      <div className="w-full flex items-center justify-center dark:bg-slate-800 bg-slate-200 dark:text-white font-montserrat text-2xl">
        You have no approved transactions at the moment
      </div>
    );
  }
  return loading ? (
    <div className="w-full h-full flex flex-col items-center justify-center font-montserrat">
      <LuLoader2
        size={35}
        className="text-slate-900 dark:text-white animate-spin"
      />
      <p className="text-sm dark:text-white">Fetching transactions...</p>
    </div>
  ) : transactions ? (
    <div className="grid col-1 bg-white shadow-sm dark:bg-slate-800 font-montserrat">
      <Table tableHeaders={columns} tableDetails={transactions} />
    </div>
  ) : (
    <p>No transactions record yet</p>
  );
}

export default UserTransactions;
