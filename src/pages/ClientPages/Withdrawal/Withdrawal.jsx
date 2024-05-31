import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { withdrawalNetworks } from "../../../assets/data";
import WithdrawalInstruction from "../../../components/WithdrawlInstruction/WithdrawalInstruction";
import WithdrawalForm from "../../../components/WIthdrawalForm/WithdrawalForm";
function Withdrawal() {
  const [network, setNetwork] = useState(null);
  const { user } = useAuth();
  return (
    <>
      <h1 className="text-gray-700 text-3xl mb-16 font-bold dark:text-white font-montserrat">
        Place a withdrawal
      </h1>
      <div className="grid grid-cols-4 gap-2 bg-white shadow-sm dark:bg-slate-800 font-montserrat">
        <div className="col-span-4 md:col-span-3 py-3 px-5">
          <div className="bg-red-100 py-3 font-bold text-xl">
            Current Withdrawable Balance : ${user?.investedFundsAndReturns}
          </div>
          {/* select network div */}
          <div className="mt-5 bg-green">
            <p>Select Withdrawal network</p>
            <select onChange={(e) => setNetwork(e.target.value)} name="" id="">
              <option value="">Select preferred network</option>
              {withdrawalNetworks.map((network) => (
                <option key={network} value={network}>
                  {network}
                </option>
              ))}
            </select>
          </div>
          {/* form */}
          <WithdrawalForm />
        </div>
        {/* instruction */}
        <WithdrawalInstruction network={network} />
      </div>
    </>
  );
}

export default Withdrawal;
