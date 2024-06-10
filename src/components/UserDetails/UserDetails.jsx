/* eslint-disable react/prop-types */

//make this component a little bit more dynamic
function UserDetails({ balance, totalDeposit, withdrawal, plans }) {
  return (
    <div className="grid grid-cols-3 gap-5 border border-black/40 dark:border-white my-4 p-4 text-gray-600 dark:text-white font-montserrat">
      <div>
        <p>Account Balance</p>
        <p>${balance}</p>
      </div>
      <div>
        <p>Deposits</p>
        <p>${totalDeposit}</p>
      </div>
      <div>
        <p>Withdrawal</p>
        <p>${withdrawal}</p>
      </div>
      <div>
        <p>Inv. Plans</p>
        <p>{plans}</p>
      </div>
      <div>
        <p>User account status</p>
        <p className="bg-green-400 text-white rounded-2xl w-fit py-1 px-2">
          Active
        </p>
      </div>
    </div>
  );
}

export default UserDetails;
