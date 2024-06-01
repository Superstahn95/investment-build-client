/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/solid";
import { IoMdCopy } from "react-icons/io";

function WithdrawalDetailsModal({ setShowModal, details }) {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-black/40 font-montserrat  flex justify-center dark:text-white">
      <div className="bg-white h-fit w-[90%]  sm:w-[500px]  p-4 rounded-md dark:bg-slate-800 ">
        <div className="border-b border-gray-400 flex items-center justify-between">
          <h2 className="text-gray-700 text-xl pb-2 font-bold dark:text-white">
            Requested Withdrawal Details
          </h2>
          <div
            onClick={() => setShowModal(null)}
            className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer border-gray-700 dark:border-white"
          >
            <XMarkIcon className="h-5 w-5 text-gray-700 dark:text-white" />
          </div>
        </div>
        <div className="w-full  ">
          <p className="my-4">Receiver wallet address</p>
          <div className="dark:bg-slate-900 py-2 rounded-md bg-slate-200 flex items-center my-4">
            <div className="flex-1">{details?.address}</div>
            <div>
              <button>
                <IoMdCopy size={30} />
              </button>
            </div>
          </div>
        </div>
        <div>
          {details?.isPaid ? "This has been paid" : "This is yet to be paid"}
        </div>
        {/* add feature to probably delete a request from here */}
        {/* <div className="flex space-x-2 items-center justify-between">
          <button
            disabled={loading}
            type="submit"
            className={`${
              loading ? "bg-gray-300" : "bg-green-500"
            } text-white flex-1 px-2 py-3 rounded-r-md rounded-tl-md`}
          >
            Confirm Deposit
          </button>
          <button
            type="submit"
            className={`${
              loading ? "bg-gray-300" : "bg-red-500"
            } text-white flex-1 px-2 py-3 rounded-r-md rounded-tl-md`}
          >
            Decline Deposit
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default WithdrawalDetailsModal;
