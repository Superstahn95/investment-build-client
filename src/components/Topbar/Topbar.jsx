/* eslint-disable react/prop-types */
import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  UserIcon,
  ChevronDownIcon,
  CreditCardIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { LuLoader2 } from "react-icons/lu";
import {
  Menu,
  MenuItems,
  Transition,
  MenuButton,
  MenuItem,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useAuth } from "../../hooks/useAuth";

function TopBar({ showNav, setShowNav }) {
  const { setTheme } = useTheme();
  const { user, logoutLoading, logout } = useAuth();
  const altImage =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  return (
    <div
      className={`fixed bg-gray-200 dark:bg-slate-900  w-full h-16 flex justify-between items-center transition-all z-[55] duruation-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16 flex justify-between items-center w-full ">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer dark:text-white"
          onClick={() => setShowNav(!showNav)}
        />
        <div className="flex space-x-1  items-center pr-4 md:pr-16">
          <div className="flex items-center space-x-2">
            <button onClick={() => setTheme("light")}>
              <SunIcon className="text-sky-600 h-8 w-8 dark:text-white" />
            </button>
            <button onClick={() => setTheme("dark")}>
              <MoonIcon className="text-gray-700 h-8 w-8 dark:text-sky-600" />
            </button>
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center items-center">
                <div>
                  <img
                    src={user?.profilePhoto ? user?.profilePhoto.url : altImage}
                    className="w-8 h-8 rounded-full md:mr-4 border-2 border-white shadow-sm"
                    alt=""
                  />
                </div>
                <span className="hidden md:block font-medium text-gray-700 dark:text-white ">
                  {user?.name}
                </span>
                <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
              </MenuButton>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform scale-95"
              enterTo="transform scale-100"
              leave="transition ease-in duration=75"
              leaveFrom="transform scale-100"
              leaveTo="transform scale-95"
            >
              <MenuItems className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
                <div className="p-1">
                  <MenuItem>
                    <Link
                      to="profile"
                      className="flex hover:bg-red-400 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                    >
                      <UserIcon className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={logout}
                      className="flex w-full hover:bg-red-400 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                    >
                      {logoutLoading ? (
                        <LuLoader2 className="animate-spin" />
                      ) : (
                        <div className="w-full flex items-center justify-start">
                          {" "}
                          <CreditCardIcon className="h-4 w-4 mr-2" />
                          Logout
                        </div>
                      )}
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
