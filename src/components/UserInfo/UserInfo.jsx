/* eslint-disable react/prop-types */
import dateFormat from "dateformat";
function UserInfo({
  name,
  email,
  number,
  registered,
  isAuthorized,
  isRestricted,
}) {
  const userInfo = [
    { header: "Name", value: name },
    { header: "Email Address", value: email },
    { header: "Mobile Number", value: number },
    {
      header: "Authorized",
      value: isAuthorized ? "Granted Access" : "Access denied",
    },
    {
      header: "Withdrawal Restricted",
      value: isRestricted ? "Withdrawal Locked" : "Withdrawal Unlocked",
    },
    { header: "Register Date", value: dateFormat(registered, "mediumDate") },
  ];
  // email={user?.email}
  // name={user?.name}
  // number={user?.phoneNumber}
  // registered={user?.createdAt}
  // isAuthorized ={user.isAuthorized}
  // isRestricted = {user.isRestrictedFromWithdrawal}
  return (
    <div className="mb-7 font-montserrat">
      <h2 className="text-gray-700 uppercase  text-xl dark:text-white mt-7">
        User Information
      </h2>
      <table className="w-full text-gray-600 border border-black/40 dark:border-white dark:text-white my-4">
        <tbody>
          {/* can be converted into an object loop if you get what i mean */}
          {userInfo.map((info) => (
            <tr className="border-b" key={info.header}>
              <td className="p-2 py-4 border-r ">{info.header}</td>{" "}
              <td>{info.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserInfo;
