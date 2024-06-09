/* eslint-disable react/prop-types */
function WithdrawalInstruction({ network }) {
  return (
    <div className=" col-span-4 lg:col-span-1  mt-5 text-gray-700  dark:text-white">
      <div className="border border-gray-500 dark:border-white rounded-md">
        <div className="flex  border-b border-gray-500 dark:border-white p-4">
          Instruction
        </div>
        {!network ? (
          <div className="p-4 text-sm">
            Start by selecting a preferred network
          </div>
        ) : (
          <div className="p-4 text-sm">
            Enter desired amount and enter your{" "}
            <span className="font-bold text-red-400">{network}</span> address
          </div>
        )}
      </div>
    </div>
  );
}

export default WithdrawalInstruction;
