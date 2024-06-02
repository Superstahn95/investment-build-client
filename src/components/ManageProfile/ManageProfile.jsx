/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDashboard } from "react-icons/md";

function ManageProfile({ user, handleSubmit }) {
  const [userDetails, setUserDetails] = useState({
    name: user?.name,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const handleDetailsEdit = (e) => {
    e.preventDefault();
    // write logic to make changes to user details
    handleSubmit(userDetails);
  };

  return (
    <div className="w-full bg-white dark:bg-slate-800 dark:text-white mx-auto rounded-md shadow-lg p-4 ">
      <div className="flex items-center mb-7 space-x-7">
        <div className="bg-red-400 rounded-full p-3">
          <MdDashboard size={40} color="white" />
        </div>
        <p className="font-bold text-2xl">Manage Profile</p>
      </div>
      <form onSubmit={handleDetailsEdit}>
        <div className="mb-3 flex flex-col space-y-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="border dark:bg-slate-900 border-gray-500/40 outline-none p-2  rounded-md"
            value={userDetails?.name}
          />
        </div>
        <div className="mb-3 flex flex-col space-y-2">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            onChange={handleChange}
            name="email"
            className="border dark:bg-slate-900 border-gray-500/40 outline-none p-2  rounded-md"
            value={userDetails?.email}
          />
        </div>
        <div className="mb-3 flex flex-col space-y-2">
          <label htmlFor="name">Phone number</label>
          <input
            type="text"
            onChange={handleChange}
            name="phoneNumber"
            className="border dark:bg-slate-900 border-gray-500/40 outline-none p-2  rounded-md"
            value={userDetails?.phoneNumber}
          />
        </div>
        {/* save change button */}
        <div className="mb-3">
          <button
            type="submit"
            className="bg-red-400 text-white px-3 py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default ManageProfile;
