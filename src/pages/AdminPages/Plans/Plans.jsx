import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { PlusIcon } from "@heroicons/react/24/solid";
// import PlanCard from "../../../components/Plans/PlanCard";
import PlanCard from "../../../components/PlanCard/PlanCard";
import toastifyConfig from "../../../utils/toastify";

function Plans() {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState(null);
  const [loadingRows, setLoadingRows] = useState({});

  const handleDelete = async (id) => {
    const newLoadingRows = { ...loadingRows };
    newLoadingRows[id] = true;
    setLoadingRows(newLoadingRows);
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}plan/${id}`
      );
      setPlans((prev) => prev.filter((p) => p._id !== id));
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      toast.error(error.response.data.message, toastifyConfig);
    } finally {
      newLoadingRows[id] = false;
      setLoadingRows(newLoadingRows);
    }
  };
  const getPlans = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}plan`,
        {
          withCredentials: true,
        }
      );
      setPlans(data.plans);
    } catch (error) {
      console.log(error);
      // do something with the error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlans();
  }, []);
  console.log(plans);

  return (
    <>
      <h1 className="text-gray-700 text-3xl mb-5 font-bold dark:text-white font-montserrat">
        System Plans
      </h1>
      <div className="flex items-center justify-between  my-2">
        <Link
          to={"create-plan"}
          className="p-3 text-white font-bold bg-red-400 flex items-center space-x-1 rounded-r-md rounded-tl-md font-montserrat"
        >
          <PlusIcon className="h-4 w-4" />
          New Plan
        </Link>
      </div>
      {/* plans div */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div>Skeleton loader component</div>
        ) : (
          plans?.map((plan) => (
            <PlanCard
              key={plan._id}
              plan={plan}
              handleDelete={handleDelete}
              loading={loadingRows[plan._id]}
            />
          ))
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default Plans;
