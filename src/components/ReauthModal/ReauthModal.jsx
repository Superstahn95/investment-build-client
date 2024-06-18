/* eslint-disable react/prop-types */
// import { useNavigate } from "react-router-dom";
import { LuLoader2 } from "react-icons/lu";
import { useAuth } from "../../hooks/useAuth";

function ReauthModal({ setShowModal }) {
  const { logout, logoutLoading } = useAuth();
  //   const navigate = useNavigate();
  const handleClick = () => {
    // setUser(null)
    logout();
    setShowModal(false);
  };
  return (
    <div className="fixed bg-black/40 top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[1999]">
      <div className="bg-white font-montserrat w-[90%] h-150px md:w-[400px] p-5 rounded-md flex flex-col space-y-3 items-center">
        <p className="font-bold text-lg md:text-xl text-center">
          OOPS!!! Authentication Expired😰
        </p>
        <button
          onClick={handleClick}
          className="bg-red-400 text-white rounded-md p-3 flex items-center justify-center w-[150px] md:w-[200px]"
        >
          {logoutLoading ? (
            <LuLoader2 className="animate-spin" />
          ) : (
            "Go back to login"
          )}
        </button>
      </div>
    </div>
  );
}

export default ReauthModal;
