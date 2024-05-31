/* eslint-disable react/prop-types */
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import toastifyConfig from "../../utils/toastify";

function DepositImageModal({ id, setShowImage, allDeposits }) {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const handleDepositApproval = async () => {
    setLoading(true);
    // approve deposit logic
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}`,
        { id },
        {
          withCredentials: true,
        }
      );
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      toast.error(error.response.data.message, toastifyConfig);
    }
  };

  const handleDepositRejection = async () => {
    setLoading(true);
    // decline deposit logic
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}decline/${id}`
      );
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      toast.error(error.response.data.message, toastifyConfig);
    }
  };
  const handleDepositDelete = async () => {
    setLoading(true);
    // delete deposit logic
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}${id}`
      );
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      toast.error(error.response.data.message, toastifyConfig);
    }
  };

  useEffect(() => {
    setDetails(allDeposits.filter((deposit) => deposit._id == id)[0]);
  }, [id, allDeposits]);

  //we need the id here
  //so the
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-black/40 font-montserrat  flex justify-center  text-red-500">
      <div className="bg-white h-fit w-[90%]  sm:w-[500px]  p-4 rounded-md dark:bg-slate-800 ">
        <div className="border-b border-gray-400 flex items-center justify-between">
          <h2 className="text-gray-700 text-xl pb-2 font-bold dark:text-white">
            ${details?.amount} Deposit details
          </h2>
          <div
            onClick={() => setShowImage(null)}
            className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer border-gray-700 dark:border-white"
          >
            <XMarkIcon className="h-5 w-5 text-gray-700 dark:text-white" />
          </div>
        </div>
        <img src={details?.receipt?.url} alt="" className="w-full h-[400px]" />
        {details?.approved ? (
          <div className="flex space-x-2 items-center justify-between">
            {" "}
            <button
              onClick={handleDepositDelete}
              disabled={loading}
              type="submit"
              className={`${
                loading ? "bg-gray-300" : "bg-red-500"
              } text-white flex-1 px-2 py-3 rounded-r-md rounded-tl-md`}
            >
              Delete Deposit
            </button>
          </div>
        ) : (
          <div className="flex space-x-2 items-center justify-between">
            <button
              onClick={handleDepositApproval}
              disabled={loading}
              type="submit"
              className={`${
                loading ? "bg-gray-300" : "bg-green-500"
              } text-white flex-1 px-2 py-3 rounded-r-md rounded-tl-md`}
            >
              Confirm Deposit
            </button>
            <button
              onClick={handleDepositRejection}
              type="submit"
              className={`${
                loading ? "bg-gray-300" : "bg-red-500"
              } text-white flex-1 px-2 py-3 rounded-r-md rounded-tl-md`}
            >
              Decline Deposit
            </button>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center">
            <p>Loading.....</p>
          </div>
        ) : null}
      </div>
      <ToastContainer />
    </div>
  );
}

export default DepositImageModal;
