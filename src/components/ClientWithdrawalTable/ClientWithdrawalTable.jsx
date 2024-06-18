/* eslint-disable react/prop-types */
import dateFormat from "dateformat";
import Table from "../Table/Table";
import { LuLoader2 } from "react-icons/lu";
import Refetch from "../Refetch/Refetch";

function ClientWithdrawalTable({ withdrawals, loading, error, refetch }) {
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
      <Refetch
        text="Unable to get your withdrawal history at the moment"
        handleRetry={refetch}
      />
    );
  }
  //handle loader properly
  return (
    <>
      {loading ? (
        <div className="w-full h-full flex flex-col items-center justify-center font-montserrat">
          <LuLoader2
            size={35}
            className="text-slate-900 dark:text-white animate-spin"
          />
          <p className="text-sm dark:text-white">Fetching withdrawals...</p>
        </div>
      ) : (
        <Table tableHeaders={columns} tableDetails={withdrawals} />
      )}
    </>
  );
}

export default ClientWithdrawalTable;
