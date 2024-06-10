import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Table/Table";
import dateFormat from "dateformat";
function AllTransactions() {
  const [transactions, setTransactions] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getTransactionHistory = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}transaction/all`,
        {
          withCredentials: true,
        }
      );
      setTransactions(data.transactions);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTransactionHistory();
  }, []);

  const columns = [
    { name: "Name", selector: (row) => row.user.name },
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
    {
      name: "Date",
      selector: (row) => dateFormat(row.createdAt, "mediumDate"),
    },
  ];

  //make a separate error display component
  if (error) {
    return (
      <div>
        <p> Unable to fetch transactions right now</p>{" "}
        <button>Click to retry</button>
      </div>
    );
  }
  if (transactions && transactions.length < 1) {
    return (
      <div className="w-full flex items-center justify-center dark:bg-slate-800  dark:text-white font-montserrat text-2xl">
        There are currently no approved transactions in your platform
      </div>
    );
  }
  return loading ? (
    <div>Skeleton component for fetchind deposits</div>
  ) : transactions ? (
    <div className="grid col-1 bg-white shadow-sm dark:bg-slate-800 font-montserrat">
      <Table tableHeaders={columns} tableDetails={transactions} />
    </div>
  ) : (
    <p>No transactions record yet</p>
  );
}

export default AllTransactions;
