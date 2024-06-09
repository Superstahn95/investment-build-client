import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
function UserCurrentPlans() {
  const { user } = useAuth();
  // subscriptions
  if (!user.subscriptions || user.subscriptions < 1) {
    return (
      <div className="grid  bg-white h-64 shadow-sm dark:bg-slate-800  mb-16">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="dark:text-white">
            You do not have an active investment plan
          </p>
          <Link
            to="buy-plan"
            className="bg-orange-500 text-white font-bold px-3 py-2 rounded-md "
          >
            Buy a plan
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className=" grid  bg-white min-h-64 shadow-sm dark:bg-slate-800  mb-16 font-montserrat p-4">
      <div className="flex flex-wrap items-center justify-center space-x-3">
        {user?.subscriptions.map((sub) => (
          <div
            key={sub._id}
            className="flex-1 min-w-[300px] min-h-[200px] dark:text-white dark:bg-slate-900 bg-slate-200 "
          >
            {/* plan name */}
            <div className="flex space-x-3 items-center border-b border-slate-400 py-3">
              <span>Name:</span>
              <span>{sub.plan.name}</span>
            </div>
            <div className="flex space-x-3 items-center border-b border-slate-400 py-3">
              <span>Cost:</span>
              <span>{sub.cost}</span>
            </div>
            <div className="flex space-x-3 items-center border-b border-slate-400 py-3">
              <span>Start Date:</span>
              <span>{sub.startDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCurrentPlans;
