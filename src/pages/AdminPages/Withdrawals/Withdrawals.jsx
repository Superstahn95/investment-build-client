import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import Table from "../../../components/Table/Table";
import toastifyConfig from "../../../utils/toastify";
import WithdrawalDetailsModal from "../../../components/WithdrawalDetailsModal/WithdrawalDetailsModal";

function Withdrawals() {
  const [loading, setLoading] = useState(false);
  const [withdrawals, setWithdrawals] = useState(null);
  const [error, setError] = useState(false);
  //   const [showModal, setShowModal] = useState(false)
  const [modalDetails, setModalDetails] = useState(null);

  const getWidthdrawals = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}withdrawal`,
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
  }, []);

  const handleWithdrawalApproval = async (id) => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}withdrawal/${id}`
      );
      setWithdrawals((prev) =>
        prev.map((entry) =>
          entry._id === id ? { ...entry, isPaid: true } : entry
        )
      );
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, toastifyConfig);
    }
  };
  const handleModal = (details) => {
    setModalDetails(details);
  };
  const columns = [
    { name: "Name", selector: (row) => row.user.name },
    { name: "Address", selector: (row) => row.address },
    { name: "Amount", selector: (row) => row.amount },
    {
      name: "Status",
      cell: (row) =>
        row.isPaid ? (
          <div className="bg-green-500 flex items-center justify-center text-white text-xs p-1 w-[100px] rounded-xl">
            Paid
          </div>
        ) : (
          <div className="bg-yellow-500 text-white flex items-center justify-center w-[100px] text-xs p-1 rounded-xl">
            Pending
          </div>
        ),
    },
    {
      name: "Request Date",
      selector: (row) => row.createdAt,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center space-x-1">
          <button
            onClick={() => handleWithdrawalApproval(row._id)}
            className={`${
              row.isPaid ? "bg-slate-600" : "bg-blue-500"
            } text-white px-3 py-2 rounded-md`}
          >
            {row.isPaid ? "Paid" : "Click as paid"}
          </button>
          <button
            onClick={() => handleModal(row)}
            className="bg-red-500 text-white px-3 py-2 rounded-md"
          >
            <EyeIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getWidthdrawals();
  }, [getWidthdrawals]);

  if (error) {
    return (
      <div>
        <p>Something went wrong trying to fetch withdrawal requests</p>
        <button>Click to retry</button>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-gray-700 text-3xl mb-16 font-bold dark:text-white font-montserrat">
        Manage Client Withdrawal Requests
      </h1>
      {loading ? (
        <div>Skeleton component for fetching withdrawals</div>
      ) : withdrawals ? (
        <div className="grid col-1 bg-white shadow-sm dark:bg-slate-800 font-montserrat">
          <Table tableHeaders={columns} tableDetails={withdrawals} />
        </div>
      ) : (
        <p>No user data available</p>
      )}
      {modalDetails && (
        <WithdrawalDetailsModal
          setShowModal={setModalDetails}
          details={modalDetails}
        />
      )}

      <ToastContainer />
    </>
  );
}

export default Withdrawals;
