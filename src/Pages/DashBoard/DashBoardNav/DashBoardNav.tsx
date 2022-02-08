import {
  IdentificationIcon,
  PlusCircleIcon,
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
            ? "w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-indigo-500 bg-gradient-to-l from-white to-indigo-100 border-l-4 "
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
                COMMUNICATION
              </p>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
                href="#"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-normal">Notifications</span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
                href="#"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-normal">
                  Campagne emailing
                </span>
              </a>
            </div>
            <div>
              <p className="text-gray-300 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                STATISTIQUES
              </p>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
                href="#"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-normal">Nouveau client</span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
                href="#"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-normal">Recette</span>
              </a>
            </div>
          </nav>
          <div className="absolute bottom-0 my-10">
            <a
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8"
              href="#"
            >
              <svg
                width="20"
                fill="currentColor"
                height="20"
                className="h-5 w-5"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
              </svg>
              <span className="mx-4 font-medium">Support</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardNav;
