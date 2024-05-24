import PlanCard from "./PlanCard";
import { data } from "./plandata";
function Plans() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-xl md:text-4xl 2xl:text-5xl">
          Our investment pricing
        </h2>
        <div className="w-[50px] md:w-[100px] h-[2px] bg-red-400 mt-4" />
        <div className="grid w-full md:w-[80%] p-4 lg:grid-cols-3 gap-8">
          {data.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
