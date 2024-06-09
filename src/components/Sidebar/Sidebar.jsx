/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = forwardRef(({ showNav, navigationLinks }, ref) => {
  return (
    <div
      ref={ref}
      className="fixed w-56 h-full z-[99] bg-white dark:bg-slate-900 shadow-md font-montserrat"
    >
      <div className="flex flex-col pt-20">
        {navigationLinks.map((link) => (
          <NavLink
            end
            key={link.link}
            to={link.to}
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-red-100 text-red-400 hover:bg-red-100 hover:text-red-400"
                : "text-gray-400 hover:bg-red-100 hover:text-red-400 dark:text-white"
            }
          >
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors  
             
       `}
            >
              <div className="mr-2">{link.icon}</div>
              <div>
                <p>{link.link}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
});
function isActive(path) {
  return (window.location.pathname = path);
}

Sidebar.displayName = "Sidebar";

export default Sidebar;
