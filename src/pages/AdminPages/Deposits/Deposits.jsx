import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import Table from "../../../components/Table/Table";
import DepositImageModal from "../../../components/DepositImageModal/DepositImageModal";

function Deposits() {
  //a useEffect hook to get all deposits
  const [showImage, setShowImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deposits, setDeposits] = useState(null);
  const [error, setError] = useState(false);

  const getDeposits = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}deposit`,
        {
          withCredentials: true,
        }
      );
      setDeposits(data.deposits);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const columns = [
    { name: "Name", selector: (row) => row.user.name },
    { name: "Email", selector: (row) => row.user.email },
    { name: "Amount", selector: (row) => row.amount },
    {
      name: "Status",
      cell: (row) =>
        row.approved ? (
          <div className="bg-green-500 flex items-center justify-center text-white text-xs p-1 w-[100px] rounded-xl">
            Processed
          </div>
        ) : (
          <div className="bg-yellow-500 text-white flex items-center justify-center w-[100px] text-xs p-1 rounded-xl">
            Pending
          </div>
        ),
    },
    {
      name: "Date Deposited",
      selector: (row) => row.createdAt,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setShowImage(row._id)}
            className="bg-blue-500 text-white px-3 py-2 rounded-md"
          >
            <EyeIcon className="h-4 w-4 text-white" />
          </button>
          <button className="bg-red-500 text-white px-3 py-2 rounded-md">
            <TrashIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getDeposits();
  }, [getDeposits]);

  if (error) {
    return (
      <div>
        <p>Something went wrong trying to fetch deposits</p>
        <button>Click to retry</button>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-gray-700 text-3xl mb-16 font-bold dark:text-white font-montserrat">
        Manage Client Deposits
      </h1>
      {loading ? (
        <div>Skeleton component for fetchind deposits</div>
      ) : deposits ? (
        <div className="grid col-1 bg-white shadow-sm dark:bg-slate-800 font-montserrat">
          <Table tableHeaders={columns} tableDetails={deposits} />
        </div>
      ) : (
        <p>No user data available</p>
      )}
      {showImage && (
        <DepositImageModal
          setShowImage={setShowImage}
          id={showImage}
          allDeposits={deposits}
        />
      )}
    </>
  );
}

export default Deposits;
