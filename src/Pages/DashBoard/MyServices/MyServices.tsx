import { Dialog, Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { Fragment, useEffect, useRef, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../Shared/Spinner/Spinner";

const MyServices = () => {
  const [serviceData, setServiceData] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const { user } = useAuth();

  // const stripePromise = loadStripe(
  //   "pk_test_51KDwkpJFhxBrJA2ZdtdIFxSZfyERBbXipaiPfxunLcpNvUYrZeQHykfEnhm58w3zMPc9zzc5KBATLvzqeERgaXzR00fB2LgLUf"
  // );

  // const removeService = (id: string) => {
  //   const deleteUrl = `https://homeservice-79e77.herokuapp.com/removeservice/${id}`;
  //   axios.delete(deleteUrl).then((data: any) => {
  //     console.log(data);
  //     if (data.data.deletedCount > 0) {
  //       const remaining = serviceData.filter(
  //         (restPlan: any) => restPlan._id !== id
  //       );
  //       setServiceData(remaining);
  //     }
  //   });
  // };
  const sortOptions = [
    { name: "Payment", href: "#", current: true },
    { name: "Cancel", href: "#", current: false },
  ];
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    const url = `https://homeservice-79e77.herokuapp.com/mybookedservices/${user.uid}`;
    axios.get(url).then((data: any) => {
      setServiceData(data.data);
    });
  }, [user.uid]);
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {serviceData ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Service
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {serviceData.map((service: any) => (
                    <tr key={service._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {service.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {service.address}
                        </div>
                        <div className="text-sm text-gray-500">
                          {service.city}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {service.paid ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-700">
                            Finished
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-700">
                            Payment Required
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {service.serviceName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {service.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {service.paid ? (
                          "Paid"
                        ) : (
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                <DotsVerticalIcon className="z-10 flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
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
                              <Menu.Items className=" z-20 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                  <a
                                    href="#"
                                    className="bg-gray-100
                                        block px-4 py-2 text-sm text-gray-700"
                                  >
                                    Your Profile
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Settings
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Sign out
                                    </a>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
