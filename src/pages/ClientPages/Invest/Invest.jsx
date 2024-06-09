import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import PlanSelection from "../../../components/PlanSelection/PlanSelection";
import PlanDetails from "../../../components/PlanDetails/PlanDetails";
import toastifyConfig from "../../../utils/toastify";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";

function Invest() {
  const [plan, setPlan] = useState("");
  const [plans, setPlans] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [investmentLoading, setInvestmentLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setUser, user } = useAuth();
  console.log(user);
  const getPlans = useCallback(async () => {
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
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPlans();
  }, [getPlans]);
  useEffect(() => {
    if (plans) {
      setPlan(plans[0]);
    }
  }, [plans]);

  const handleInvestmentClick = async () => {
    setInvestmentLoading(true);
    const planObject = { planId: plan._id, amount: investmentAmount };
    // subscribe to plan logic here
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}plan/subscribe`,
        planObject,
        {
          withCredentials: true,
        }
      );
      const newSub = { ...data.plan, plan };
      setUser((prev) => ({
        ...prev,
        approvedBalance: prev.approvedBalance - parseInt(investmentAmount),
        investedFundsAndReturns:
          prev.investedFundsAndReturns + parseInt(investmentAmount),
        subscriptions: Array.isArray(prev.subscriptions)
          ? [...prev.subscriptions, newSub]
          : [newSub],
      }));
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setInvestmentLoading(false);
    }
  };
  if (error) {
    return (
      <div>
        <p>Something went wrong</p>
        <button>Click to retry</button>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-gray-700 text-3xl mb-16 font-bold dark:text-white font-montserrat">
        Get started with your investment
      </h1>
      {loading && <div>Fetching plans....</div>}
      {plans && (
        <div className="grid  xl:grid-cols-4 gap-2 bg-white shadow-sm dark:bg-slate-800 font-montserrat">
          <PlanSelection
            plans={plans}
            investmentAmount={investmentAmount}
            setInvestmentAmount={setInvestmentAmount}
            plan={plan}
            setPlan={setPlan}
          />

          <div className=" col-span-4 xl:col-span-1  mt-5 text-gray-700  dark:text-white font-montserrat">
            <PlanDetails
              amount={investmentAmount}
              handleInvesmentClick={handleInvestmentClick}
              plan={plan}
              loading={investmentLoading}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Invest;
