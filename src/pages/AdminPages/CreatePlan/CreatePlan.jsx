import { Link } from "react-router-dom";
import axios from "axios";
import PlanForm from "../../../components/PlanForm/PlanForm";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import toastifyConfig from "../../../utils/toastify";

function CreatePlan() {
  const handleSubmit = async (formData) => {
    console.log("form has been submitted", formData);
    // dispatch(createPlan(formData));
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}plan`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(data.message);
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      toast.error(error.response.data.message, toastifyConfig);
    }
  };
  const initialValues = {
    name: "",
    minimumPrice: "",
    maximumPrice: "",
    duration: "",
    topUpInterval: "",
    giftBonus: "",
  };

  return (
    <>
      <div className="flex items-center justify-between mb-16 font-montserrat">
        <h1 className="text-gray-700 text-3xl  font-bold dark:text-white">
          Add Investment plan
        </h1>
        <Link
          to={"/dashboard/plans"}
          className="flex  items-center space-x-1 text-white capitalize bg-red-400 px-3 py-2 rounded-md"
        >
          <ArrowLeftIcon className="h-4 w-4 text-white" />
          back
        </Link>
      </div>

      <div className="shadow-md bg-white dark:bg-slate-800 p-4">
        <PlanForm onSubmit={handleSubmit} initialData={initialValues} />
      </div>
      <ToastContainer />
    </>
  );
}

export default CreatePlan;
