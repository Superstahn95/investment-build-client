/* eslint-disable react/prop-types */
import dateFormat from "dateformat";
import Table from "../Table/Table";

function ClientDepositTable({ allDeposits, loading }) {
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
  //handle loader properly
  return (
    <>
      {loading ? (
        <div>Hold on while we fetch your history</div>
      ) : (
        <Table tableHeaders={columns} tableDetails={allDeposits} />
      )}
    </>
  );
}

export default ClientDepositTable;
