import { CiUser } from "react-icons/ci";
import { PiMoneyWavy, PiBrainThin } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import Step from "./Step";
import help from "/images/help-1.jpg";

const steps = [
  {
    process: "Create an account",
    details: "create an account by clicking on the registration button",
    icon: (
      <div className="w-[100px] h-[100px] rounded-full bg-red-400 flex items-center justify-center">
        <CiUser className="text-3xl md:text-6xl font-bold text-white" />
      </div>
    ),
  },
  {
    process: "Fund account",
    details: "Deposit crypto into your trading account",
    icon: (
      <div className="w-[100px] h-[100px] rounded-full bg-blue-600 flex items-center justify-center">
        <PiMoneyWavy className="text-3xl md:text-6xl font-bold text-white" />
      </div>
    ),
  },
  {
    process: "Select plan",
    details:
      " select the investment plan that suits your budget and financial goals",
    icon: (
      <div className="w-[100px] h-[100px] rounded-full bg-red-800 flex items-center justify-center">
        <PiBrainThin className="text-3xl md:text-6xl font-bold text-white" />
      </div>
    ),
  },
  {
    process: "Withdraw funds",
    details: "Withdraw funds on completion of your selected investment plan",
    icon: (
      <div className="w-[100px] h-[100px] rounded-full bg-green-800 flex items-center justify-center">
        <MdAttachMoney className="text-3xl md:text-6xl font-bold text-white" />,
      </div>
    ),
  },
];
function Onboarding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-slate-800 font-montserrat text-2xl md:text-4xl 2xl:text-6xl text-center capitalize font-bold w-[80%] mx-auto md:w-full">
        Get started with your crypto journey{" "}
      </h1>
      <h2 className="text-slate-800 font-montserrat text-2xl md:text-4xl 2xl:text-6xl text-center capitalize font-bold  ">
        In few minutes
      </h2>
      <div className="mt-7">
        <div className="grid lg:grid-cols-2 gap-8 p-4  w-full md:w-[80%] mx-auto">
          {/* image div */}
          <div className=" flex items-end justify-center">
            <div className="w-full  rounded-lg h-full md:h-[80%] md:w-[80%] relative">
              <img src={help} alt="" />
            </div>
          </div>
          {/* steps div */}
          <div className="grid lg:grid-cols-2 gap-2">
            {steps.map((step) => (
              <Step key={step.process} step={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;

// https://retroworldfx.com/wp-content/uploads/2022/03/mobile-app-testimonial.webp
