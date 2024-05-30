/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import { LuLoader2 } from "react-icons/lu";
import * as Yup from "yup";
import MyTextInput from "../CustomFormInputs/MyTextInput";
import MySelectField from "../CustomFormInputs/MySelectField";

function PlanForm({ initialData, onSubmit, loading }) {
  console.log(initialData);
  return (
    <Formik
      initialValues={initialData}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        minimumPrice: Yup.number().required("Required"),
        maximumPrice: Yup.number().required("Required"),
        giftBonus: Yup.number().required("Required"),
        topUpInterval: Yup.string().required("Required"),
        duration: Yup.number().required("Required"),
      })}
      onSubmit={(values) => {
        onSubmit({ ...values, topUpMode: "percentage", topUpAmount: 40 });
      }}
    >
      <Form>
        <div className="grid md:grid-cols-2 gap-4">
          <MyTextInput
            label="Plan Name"
            name="name"
            type="text"
            placeholder="Enter plan name"
            directive="This is going to be the name of your plan"
          />
          <MyTextInput
            label="Plan Minimum Price"
            name="minimumPrice"
            type="number"
            placeholder="Enter minimum plan price"
            directive="This is the minimum balance a user will need to have before investing in a plan"
          />
          <MyTextInput
            label="Plan Maximum Price"
            name="maximumPrice"
            type="number"
            placeholder="Enter maximum plan price"
            directive="This is the maximum amount that can be invested in a plan"
          />
          <MyTextInput
            label="Enter plan duration (days)"
            name="duration"
            type="number"
            placeholder="Plan duration"
            directive="This is the duration a plan is going to run for in days"
          />
          <MyTextInput
            label="Gift Bonus ($)"
            name="giftBonus"
            type="number"
            placeholder="Gift Bonus"
            directive="This is the bonus that will be credited to a user's balance upon subscribing for a plan"
          />
          <MySelectField name="topUpInterval" label="Top-up Interval">
            <option value="">Select an interval</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </MySelectField>
        </div>
        <div className="my-2">
          <button
            type="submit"
            className="bg-red-400 w-full text-white px-2 py-3 rounded-r-md rounded-tl-md flex items-center justify-center"
          >
            {loading ? <LuLoader2 className="animate-spin" /> : "Submit"}
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default PlanForm;
