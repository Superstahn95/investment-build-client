import { useState, useEffect, Fragment, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  Menu,
  Transition,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import UserDetails from "../../../components/UserDetails/UserDetails";
import UserInfo from "../../../components/UserInfo/UserInfo";
import FundingModal from "../../../components/FundingModal/FundingModal";
function User() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  //get a single user
  const getUser = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}users/${id}`,
        {
          withCredentials: true,
        }
      );
      setUser(data.user);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    getUser();
  }, [getUser]);

  //get proper skeleton component and error display component
  if (error) {
    return (
      <div>
        <p>Something went wrong</p>
        <button>Click to retry</button>
      </div>
    );
  }
  return (
    <>
      <div className="shadow-lg rounded-lg bg-white dark:bg-slate-800 py-10 px-4 ">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-700 font-bold text-2xl dark:text-white">
            {user?.name}
          </h2>
          {/* button div */}
          <div className="flex items-center space-x-1">
            <Link
              to={"/users"}
              className="inline-flex w-full justify-center items-center text-white capitalize bg-red-400 px-3 py-2 rounded-md"
            >
              back
            </Link>
            <Menu as={"div"} className="relative">
              <MenuButton
                className={
                  "inline-flex w-full justify-center items-center text-white capitalize bg-red-400 px-3 py-2 rounded-md"
                }
              >
                Actions
                <ChevronDownIcon className="ml-2 h-4 w-4 text-white" />
              </MenuButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform scale-95"
                enterTo="transform scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform scale-95"
                leaveTo="transform scale-95"
              >
                <MenuItems className="absolute right-0 w-56 z-[99] mt-2 origin-top-right bg-white dark:bg-slate-800 rounded shadow-sm">
                  <MenuItem>
                    {({ active }) => (
                      <div
                        onClick={setShowModal(true)}
                        className={`${
                          active && "bg-red-100 "
                        } dark:text-white  hover:text-black dark:hover:text-black p-2`}
                        href="/account-settings"
                      >
                        Credit/Debit
                      </div>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <div
                        className={`${
                          active && "bg-red-100  "
                        } p-2 hover:text-black dark:hover:text-black dark:text-white`}
                        href="/account-settings"
                      >
                        Delete {user?.name}
                      </div>
                    )}
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
        {/* details div */}
        <UserDetails
          balance={user?.approvedBalance}
          invFunds={user?.investedFundsAndReturns}
          totalDeposit={user?.totalDeposit}
          withdrawal={user?.totalWithdrawal}
          plans={
            Array.isArray(user?.subscriptions) ? user?.subscriptions.length : 0
          }
        />

        {/* user information */}
        <UserInfo
          email={user?.email}
          name={user?.name}
          number={user?.phoneNumber}
          registered={user?.createdAt}
          isAuthorized={user?.isAuthorized}
          isRestricted={user?.isRestrictedFromWithdrawal}
        />
      </div>
      {showModal && <FundingModal closeModal={closeModal} id={user?._id} />}
    </>
  );
}

export default User;
