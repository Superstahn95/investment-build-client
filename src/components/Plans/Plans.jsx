import { useEffect, useState } from "react";
import axios from "axios";
import PlanCard from "./PlanCard";
import Refetch from "../Refetch/Refetch";
// import { data } from "./plandata";
import { LuLoader2 } from "react-icons/lu";

function Plans() {
  const [plans, setPlans] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getPlans = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env}plan`);
      setPlans(data.plans);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPlans();
  }, []);
  if (error) {
    return (
      <Refetch
        handleRetry={getPlans}
        text="We were unable to get the investment plans at the moment"
      />
    );
  }
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-xl md:text-4xl 2xl:text-5xl">
          Our investment pricing
        </h2>
        <div className="w-[50px] md:w-[100px] h-[2px] bg-red-400 mt-4" />
        {loading ? (
          <div className="w-full h-full flex flex-col items-center justify-center font-montserrat">
            <LuLoader2 size={35} className="text-slate-900 animate-spin" />
            <p className="text-sm dark:text-white">Fetching plans...</p>
          </div>
        ) : (
          <div className="grid w-full md:w-[80%] p-4 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Plans;
