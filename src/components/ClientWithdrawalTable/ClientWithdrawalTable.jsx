/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";
import Table from "../Table/Table";

function ClientWithdrawalTable() {
  const [loading, setLoading] = useState(false);
  const [withdrawals, setWithdrawals] = useState(null);
  const [error, setError] = useState(false);

  const getWithdrawalHistory = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}withdrawal/mywithdrawals`,
        {
          withCredentials: true,
        }
      );
      setWithdrawals(data.withdrawals);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getWithdrawalHistory();
  }, []);
  const columns = [
    { name: "Amount", selector: (row) => `$${row.amount}`, sortable: true },
    { name: "Submitted address", selector: (row) => row.address },
    {
      name: "Status",
      cell: (row) =>
        row.isPaid ? (
          <div className="bg-green-500 flex items-center justify-center text-white text-xs p-1 w-[100px] rounded-xl">
            Paid
          </div>
        ) : (
          <div className="bg-yellow-500 flex items-center justify-center text-white text-xs p-1 w-[100px] rounded-xl">
            P
          </div>
        ),
    },
    {
      name: "Date Created",
      selector: (row) => dateFormat(row.createdAt, "mediumDate"),
      sortable: true,
    },
  ];
  if (error) {
    return (
      <div>
        <p>Unable to get withdrawal history</p>
        <button>Click to retry</button>
      </div>
    );
  }
  //handle loader properly
  return (
    <>
      {loading ? (
        <div>Hold on while we fetch your history</div>
      ) : (
        withdrawals && (
          <Table tableHeaders={columns} tableDetails={withdrawals} />
        )
      )}
    </>
  );
}

export default ClientWithdrawalTable;
