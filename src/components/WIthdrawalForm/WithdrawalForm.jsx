/* eslint-disable react/prop-types */
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import MyTextInput from "../CustomFormInputs/MyTextInput";
import { LuLoader2 } from "react-icons/lu";
import toastifyConfig from "../../utils/toastify";
import { useAuth } from "../../hooks/useAuth";
function WithdrawalForm({ network }) {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuth();
  const initialDetails = {
    amount: "",
    address: "",
  };
  const handleWithdrawalRequest = async (details) => {
    setLoading(true);
    if (!details.amount) {
      return toast.error(
        "Amount entered is greater than withdrawable balance",
        toastifyConfig
      );
    }
    if (details.amount > user?.withdrawableFunds) {
      return toast.error(
        "Amount entered is greater than withdrawable balance",
        toastifyConfig
      );
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}withdrawal`,
        details,
        {
          withCredentials: true,
        }
      );
      setUser((prev) => ({
        ...prev,
        withdrawableFunds:
          prev.withdrawableFunds - parseInt(data.amountRequested),
      }));
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialDetails}
        validationSchema={Yup.object({
          amount: Yup.number().required("Required"),
          address: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          handleWithdrawalRequest(values);
        }}
      >
        <Form>
          <MyTextInput
            label="Amount to withdraw"
            name="amount"
            type="number"
            placeholder="Enter the amount you wish to withdraw"
          />
          <MyTextInput
            label={`Enter ${network} wallet address`}
            name="address"
            type="text"
            placeholder="Wallet address"
          />
          <div className="my-2">
            <button
              disabled={loading}
              type="submit"
              className="bg-red-400 text-white px-2 py-3 rounded-r-md rounded-tl-md w-full cursor-pointer flex items-center justify-center"
            >
              {loading ? <LuLoader2 className="animate-spin" /> : "Withdraw"}
            </button>
          </div>
        </Form>
      </Formik>
      <ToastContainer containerId={"withdrawalRequest"} />
    </>
  );
}

export default WithdrawalForm;

{
  /* <AuthTextInput
label="Email"
name="email"
type="email"
placeholder="Enter your email"
/> */
}
// <AuthTextInput
// label="Password"
// name="password"
// type="password"
// placeholder="Enter your password"
// />
