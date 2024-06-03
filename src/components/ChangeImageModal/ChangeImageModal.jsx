/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/solid";
import { toast, ToastContainer } from "react-toastify";
import { LuLoader2 } from "react-icons/lu";
import { useState } from "react";
import toastifyConfig from "../../utils/toastify";

function ChangeImageModal({ setShowImageModal, handleSubmit, loading }) {
  const [image, setImage] = useState(null);
  const uploadImage = (e) => {
    e.preventDefault();
    if (!image) {
      return toast.error("Select an image", toastifyConfig);
    }
    const formData = new FormData();
    formData.append("profilePhoto", image);
    // function for submitting data
    console.log("about editing the user profile picture");
    handleSubmit(formData);
  };

  return (
    <div className="fixed w-full z-[100] h-full top-0 left-0 bg-black/40 font-montserrat  flex justify-center ">
      <div className="bg-white dark:bg-slate-800 h-fit w-[90%]  sm:w-[500px]  p-4 rounded-md mt-10 ">
        <div className="border-b border-gray-400 flex items-center justify-between">
          <h2 className="text-gray-700 dark:text-white text-xl pb-2 font-bold ">
            Change Profile Picture
          </h2>
          <button
            disabled={loading}
            onClick={() => setShowImageModal(false)}
            className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer border-gray-700 "
          >
            <XMarkIcon className="h-5 w-5 text-gray-700 dark:text-white" />
          </button>
        </div>
        {/* file upload field */}
        <form encType="multipart/form-data" onSubmit={(e) => uploadImage(e)}>
          <div className="my-3 ">
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              name="profilePhoto"
              className="border dark:bg-slate-900 dark:text-white border-gray-500/40 outline-none p-2 w-full rounded-md"
            />
          </div>
          <div className="">
            <div className="ml-auto w-fit space-x-3">
              <button
                disabled={loading}
                role="button"
                onClick={() => setShowImageModal(false)}
                className="bg-red-500 text-white px-3 py-2 rounded-md"
              >
                Close
              </button>
              <button
                disabled={loading}
                type="submit"
                className="bg-green-700 text-white px-3 py-2 rounded-md"
              >
                {loading ? <LuLoader2 className="animate-spin" /> : "Upload"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ChangeImageModal;
