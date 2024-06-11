import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import PlanForm from "../../../components/PlanForm/PlanForm";
import { toast, ToastContainer } from "react-toastify";
import toastifyConfig from "../../../utils/toastify";
import { LuLoader2 } from "react-icons/lu";

function UpdatePlan() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [error, setError] = useState(false);
  const [plan, setPlan] = useState(null);
  const navigate = useNavigate();

  const getPlan = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}plan/${id}`,
        {
          withCredentials: true,
        }
      );
      setPlan(data.plan);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getPlan();
  }, [getPlan]);

  const handleSubmit = async (formData) => {
    // dispatch(updatePlan({ id, planObject: { ...formData } }));
    // update plan with the form data passed
    setUpdateLoading(true);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}plan/${id}`,
        formData,
        {
          withCredentials: true,
        }
      );
      toast.success(data.message, toastifyConfig);
      navigate("/dashboard/plans");
    } catch (error) {
      toast.error(error.response.data.message, toastifyConfig);
    } finally {
      setUpdateLoading(false);
    }
  };

  if (error) {
    return (
      <div>
        <p>Something went wrong trying to get the plan</p>
        <button>Click to retry</button>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-16 font-montserrat">
        <h1 className="text-gray-700 text-3xl  font-bold dark:text-white">
          Update Plan
        </h1>
        <Link
          to={"/dashboard/plans"}
          className="flex  items-center space-x-1 text-white capitalize bg-red-400 px-3 py-2 rounded-md"
        >
          <ArrowLeftIcon className="h-4 w-4 text-white" />
          back
        </Link>
      </div>
      {loading && (
        <div className="w-full h-full flex flex-col items-center justify-center font-montserrat">
          <LuLoader2
            size={35}
            className="text-slate-900 dark:text-white animate-spin"
          />
          <p className="text-sm dark:text-white">Fetching plan details...</p>
        </div>
      )}
      <div className="shadow-md bg-white dark:bg-slate-800 p-4">
        {plan !== null && (
          <PlanForm
            initialData={plan}
            onSubmit={handleSubmit}
            loading={updateLoading}
          />
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default UpdatePlan;
