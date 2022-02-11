import {
  IdentificationIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

const DashBoardNav = () => {
  const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <Link
        className={
          match
            ? "w-full text-gray-800 dark:text-black flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-indigo-500 bg-gradient-to-l from-white to-indigo-100 border-l-4 "
            : "w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start"
        }
        to={to}
        {...props}
      >
        {children}
      </Link>
    );
  };
  return (
    <>
      <div className="hidden md:flex flex-col sm:flex-row sm:justify-around  bg-white dark:bg-gray-800">
        <div className="w-72 h-screen">
          <nav className="mt-10 px-6">
            <CustomLink to="/dashboard">
              <IdentificationIcon
                className="text-indigo-500"
                width="20"
                height="20"
              />
              <span className="mx-4 text-md font-normal">Dashboard</span>
            </CustomLink>
            <div>
              <p className="text-gray-300 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                Admin Services
              </p>
              <CustomLink to="/dashboard/users">
                <UserGroupIcon
                  className="text-indigo-500"
                  width="20"
                  height="20"
                />
                <span className="mx-4 text-md font-normal">Users</span>
              </CustomLink>

              <CustomLink to="/dashboard/addservice">
                <PlusCircleIcon
                  className="text-indigo-500"
                  width="20"
                  height="20"
                />
                <span className="mx-4 text-md font-normal">Add Service</span>
              </CustomLink>
              <CustomLink to="/dashboard/bookedservices">
                <ViewListIcon
                  className="text-indigo-500"
                  width="20"
                  height="20"
                />
                <span className="mx-4 text-md font-normal">
                  Booked Services
                </span>
              </CustomLink>
              <CustomLink to="/dashboard/addadmin">
                <ShieldCheckIcon
                  className="text-indigo-500"
                  width="20"
                  height="20"
                />
                <span className="mx-4 text-md font-normal">Add an Admin</span>
              </CustomLink>
            </div>
            <div>
              <p className="text-gray-300 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                Users Services
              </p>
              <CustomLink to="/dashboard/myservices">
                <ShieldCheckIcon
                  className="text-indigo-500"
                  width="20"
                  height="20"
                />
                <span className="mx-4 text-md font-normal">My Services</span>
              </CustomLink>
              <CustomLink to="/dashboard/addadmin">
                <ShieldCheckIcon
                  className="text-indigo-500"
                  width="20"
                  height="20"
                />
                <span className="mx-4 text-md font-normal">Add an Admin</span>
              </CustomLink>
            </div>
            <div>
              <p className="text-gray-300 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                STATISTIQUES
              </p>
              <CustomLink to="/dashboard/addadmin">
                <ShieldCheckIcon
                  className="text-indigo-500"
                  width="20"
                  height="20"
                />
                <span className="mx-4 text-md font-normal">Add an Admin</span>
              </CustomLink>
              <CustomLink to="/dashboard/addadmin">
                <ShieldCheckIcon
                  className="text-indigo-500"
                  width="20"
                  height="20"
                />
                <span className="mx-4 text-md font-normal">Add an Admin</span>
              </CustomLink>
            </div>
          </nav>
          <div className="absolute bottom-0 my-10">
            <CustomLink
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8"
              to="/dashboard"
            >
              <QuestionMarkCircleIcon
                width="20"
                height="20"
                className="h-5 w-5"
              />

              <span className="mx-4 font-medium">Support</span>
            </CustomLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardNav;
