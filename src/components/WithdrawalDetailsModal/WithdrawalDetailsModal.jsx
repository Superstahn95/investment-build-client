/* eslint-disable react/prop-types */
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { IoMdCopy } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";

function WithdrawalDetailsModal({ setShowModal, details }) {
  const [copy, setCopy] = useState(false);
  return (
    <div className="fixed z-[99] w-full h-full top-0 left-0 bg-black/40 font-montserrat  flex justify-center dark:text-white">
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
            <div className="flex-1 text-xs">{details?.address}</div>
            <div>
              {!copy ? (
                <button
                  onClick={() => {
                    setCopy(true);
                    navigator.clipboard.writeText(details?.address);
                    setTimeout(() => {
                      setCopy(false);
                    }, 3000);
                  }}
                >
                  <IoMdCopy size={20} />
                </button>
              ) : (
                <div className="flex items-center space-x-1 cursor-pointer ">
                  <MdOutlineDone size={20} />
                  <span className="text-xs">Copied</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`${details?.isPaid ? "text-green-500" : "text-red-400"}`}
        >
          {details?.isPaid ? "This has been paid" : "This is yet to be paid"}
        </div>
      </div>
    </div>
  );
}

export default WithdrawalDetailsModal;
