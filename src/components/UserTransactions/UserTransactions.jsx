import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Table/Table";
function UserTransactions() {
  const [transactions, setTransactions] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getTransactionHistory = async () => {
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
    { name: "Date", selector: (row) => row.createdAt },
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
      <div>
        <p> Unable to fetch transactions right now</p>{" "}
        <button>Click to retry</button>
      </div>
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
    <div>Skeleton component for fetchind deposits</div>
  ) : transactions ? (
    <div className="grid col-1 bg-white shadow-sm dark:bg-slate-800 font-montserrat">
      <Table tableHeaders={columns} tableDetails={transactions} />
    </div>
  ) : (
    <p>No transactions record yet</p>
  );
  // <table className="dark:text-white  rounded-md text-gray-500">
  //   <thead className="bg-gray-200 dark:bg-slate-900">
  //     <tr>
  //       <th className="p-2">Date</th>
  //       <th>Type</th>
  //       <th>Amount</th>
  //     </tr>
  //   </thead>
  //   <tbody>No records yet</tbody>
  // </table>
}

export default UserTransactions;
