/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../CustomFormInputs/MyTextInput";
import { LuLoader2 } from "react-icons/lu";
function WithdrawalForm({ network }) {
  const initialDetails = {
    amount: "",
    address: "",
  };
  const validationSchema = Yup.object({
    amount: Yup.number().required("Required"),
    address: Yup.string().required("Required"),
  });
  const loading = false;
  return (
    <Formik
      initialValues={initialDetails}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
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
          type="number"
          placeholder="Wallet address"
        />
        <div className="my-2">
          <button
            disabled={loading}
            type="submit"
            className="bg-red-400 text-white px-2 py-3 rounded-r-md rounded-tl-md w-full cursor-pointer flex items-center justify-center"
          >
            {loading ? <LuLoader2 className="animate-spin" /> : "Sign In"}
          </button>
        </div>
      </Form>
    </Formik>
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
