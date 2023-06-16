'use client'

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const navigation = [
    { name: "Home", to: "/home", current: true },
    { name: "Services", to: "/services", current: false },
    { name: "Hire Someone", to: "/hire_single", current: false },
    { name: "About Us", to: "/dashboard", current: false },
    { name: "Contact Us", to: "/login", current: false },
  ];
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Disclosure as="nav" className="dark:bg-gray-900 bg-gray-200">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Image width={100} height={100}
                    className="block lg:hidden h-8 w-auto dark:backdrop-invert"
                    src='/logo.png'
                    alt="logo"
                  />
                  <Image width={100} height={100}
                    className="hidden lg:block h-8 w-auto dark:backdrop-invert"
                    src='/logo.png'
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.to}
                        className={classNames(
                          item.current
                            ? "dark:bg-gray-900 dark:text-white hover:bg-gray-300"
                            : "dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-300",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {user?.email ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="dark:bg-gray-800 p-1 rounded-full dark:text-gray-400 dark:hover:text-white hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 dark:focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <Image width={20} height={20}
                          className="h-8 w-8 rounded-full"
                          src={user?.photoURL || '/user-default.png'}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-max rounded-md shadow-lg py-1 dark:bg-gray-700 bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <Menu.Item>
                          <div className="flex flex-col justify-center align-middle items-center px-2 py-4">
                            <Image width={20} height={20}
                              className=" h-16 w-1h-16 rounded-full ring-2 ring-white bg-orange-500"
                              src={user?.photoURL || '/user-default.png'}
                              alt=""
                            />
                            <p className="text-2xl font-semibold text-gray-700 dark:text-white">
                              {user?.displayName}
                            </p>
                            <p className="text-base text-gray-600 dark:text-white">
                              {user?.email}
                            </p>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/"
                              className={classNames(
                                active
                                  ? "bg-gray-100 dark:hover:bg-gray-600"
                                  : "",
                                "block px-4 py-2 text-sm text-gray-600 dark:text-white hover:bg-white"
                              )}
                            >
                              Manage Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/dashboard"
                              className={classNames(
                                active
                                  ? "bg-gray-100 dark:hover:bg-gray-600"
                                  : "",
                                "block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-white"
                              )}
                            >
                              DashBoard
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/dashboard/bookings"
                              className={classNames(
                                active
                                  ? "bg-gray-100 dark:hover:bg-gray-600"
                                  : "",
                                "block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-white"
                              )}
                            >
                              Your Bookings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          <div>
                            <button
                              onClick={signOutUser}
                              className="hover:bg-white
                                inline py-4 px-4 text-sm text-gray-700 w-full dark:text-white dark:hover:bg-gray-600 text-left"
                            >
                              Sign out
                            </button>
                          </div>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link
                    href="/login"
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
