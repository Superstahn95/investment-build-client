/* eslint-disable react/prop-types */
import { AiOutlineUser } from "react-icons/ai";

function ProfileDetails({ user, setShowImageModal }) {
  const altImage =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  return (
    <div className="w-full bg-white dark:bg-slate-800 dark:text-white mx-auto rounded-md shadow-lg p-4 ">
      <div className="flex items-center mb-7 space-x-7">
        <div className="bg-red-400 rounded-full p-3">
          <AiOutlineUser size={40} color="white" />
        </div>
        <p className="font-bold text-2xl ">Profile</p>
      </div>
      {/* profile photo */}
      <div className="flex items-center justify-between  border-b py-3">
        <div className="flex flex-col space-y-3">
          <span className="text-sm text-black dark:text-white font-semibold">
            Profile Photo
          </span>
          <img
            src={user?.profilePhoto ? user?.profilePhoto.url : altImage}
            className="w-[50px] h-[50px] rounded-full"
            alt="profile picture"
          />
        </div>
        {/* will pop out our profile picture change modal */}
        <button
          onClick={() => setShowImageModal(true)}
          className="border border-black p-1 transition-all duration-300 ease-in-out text-sm hover:border-orange-500 hover:text-orange-500"
        >
          Change
        </button>
      </div>
      {/* profile name */}
      <div className="border-b py-3 space-y-3">
        <span className="text-sm text-black dark:text-white  font-semibold">
          Name
        </span>
        <p className="text-black/80 dark:text-white ">{user?.name}</p>
      </div>
      {/* profile email*/}
      <div className="border-b py-3 space-y-3">
        <span className="text-sm text-black dark:text-white  font-semibold">
          Email
        </span>
        <p className="text-black/80 dark:text-white ">{user?.email}</p>
      </div>
    </div>
  );
}

export default ProfileDetails;
