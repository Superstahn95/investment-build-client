/* eslint-disable react/prop-types */
import dateFormat from "dateformat";
import Table from "../Table/Table";
import { LuLoader2 } from "react-icons/lu";
import Refetch from "../Refetch/Refetch";

function ClientDepositTable({ allDeposits, loading, error, refetch }) {
  //   const [deposit, setDeposit] = useState(userDepositHistory);
  // i should be firing off a useEffect hook here to fetch the data

  const columns = [
    { name: "Amount", selector: (row) => `$${row.amount}`, sortable: true },
    { name: "Payment Mode", selector: () => "Express" },
    {
      name: "Status",
      cell: (row) =>
        row.approved ? (
          <div className="bg-green-500 flex items-center justify-center text-white text-xs p-1 w-[100px] rounded-xl">
            Processed
          </div>
        ) : (
          <div className="bg-yellow-500 flex items-center justify-center text-white text-xs p-1 w-[100px] rounded-xl">
            Pending
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
        text="Unable to get your deposit history at the moment"
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
          <p className="text-sm dark:text-white">Fetching deposits...</p>
        </div>
      ) : (
        allDeposits && (
          <Table tableHeaders={columns} tableDetails={allDeposits} />
        )
      )}
    </>
  );
}

export default ClientDepositTable;
