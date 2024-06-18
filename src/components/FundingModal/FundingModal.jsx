/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { Formik, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { LuLoader2 } from "react-icons/lu";
import MyTextInput from "../CustomFormInputs/MyTextInput";
import * as Yup from "yup";
import MySelectField from "../CustomFormInputs/MySelectField";
import { XMarkIcon } from "@heroicons/react/24/solid";
import toastifyConfig from "../../utils/toastify";

//send a request to an end point to credit or debit user
// make this component dynamic
function FundingModal({ id, closeModal }) {
  //id action, field, amount
  const [loading, setLoading] = useState(false);
  const initialData = {
    id,
    amount: "",
    field: "bonus",
    action: "credit",
  };
  const creditOrDebitUser = async (fundObject) => {
    setLoading(true);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}users/fund`,
        fundObject,
        {
          withCredentials: true,
        }
      );
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      toast.error(error.response.data.message, toastifyConfig);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-black/40 font-montserrat  flex justify-center">
      <div className="bg-white h-fit w-[90%]  sm:w-[500px]  p-4 rounded-md dark:bg-slate-800">
        <div className="border-b border-gray-400 flex items-center justify-between">
          <h2 className="text-gray-700 text-xl pb-2 font-bold dark:text-white">
            Credit/Debit Stanley&apos;s Account
          </h2>
          <div
            onClick={closeModal}
            className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer border-gray-700 dark:border-white"
          >
            <XMarkIcon className="h-5 w-5 text-gray-700 dark:text-white" />
          </div>
        </div>
        <Formik
          initialValues={initialData}
          validationSchema={Yup.object({
            amount: Yup.number().required("Required"),
            field: Yup.string().required("Required"),
            action: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            creditOrDebitUser({
              ...values,
              amount: parseInt(values.amount),
              id,
            });
          }}
        >
          <Form>
            <div className="mt-4">
              <MyTextInput
                name="amount"
                type="number"
                placeholder="Enter amount"
              />
            </div>

            <div className="mt-4 ">
              {/* subject to changes */}
              <MySelectField name="field" label="Select where to Credit/Debit">
                <option value="bonus">Bonus</option>
                <option value="profit">Profit</option>
                <option value="approvedBalance">Approved Balance</option>
                <option value="pendingBalance">Pending Balance</option>
                <option value="investedFundsAndReturns">Invested Funds</option>
                <option value="withdrawableFunds">Withdrawable Funds</option>
                <option value="totalDeposit">Total Deposit</option>
              </MySelectField>
            </div>

            <div className="mt-4 ">
              <MySelectField name="action" label="Choose action">
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </MySelectField>
            </div>
            <div className="my-2">
              <button
                type="submit"
                className="bg-red-400 text-white px-2 py-3 w-full rounded-r-md rounded-tl-md"
              >
                {loading ? <LuLoader2 className="animate-spin" /> : "Submit"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
}

export default FundingModal;
