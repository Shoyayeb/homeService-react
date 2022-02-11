import { Dialog, Transition } from "@headlessui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { Fragment, useEffect, useRef, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import PaymentModal from "../../Shared/Modals/PaymentModal";

const MyServices = () => {
  const [serviceData, setServiceData] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const { user } = useAuth();

  const stripePromise = loadStripe(
    "pk_test_51KDwkpJFhxBrJA2ZdtdIFxSZfyERBbXipaiPfxunLcpNvUYrZeQHykfEnhm58w3zMPc9zzc5KBATLvzqeERgaXzR00fB2LgLUf"
  );

  // const removeService = (id: string) => {
  //   const deleteUrl = `http://localhost:4000/removeservice/${id}`;
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
  useEffect(() => {
    const url = `http://localhost:4000/mybookedservices/${user.uid}`;
    axios.get(url).then((data: any) => {
      setServiceData(data.data);
    });
  }, []);
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                        ""
                      ) : (
                        <button
                          onClick={() => setOpen(true)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Pay
                        </button>
                      )}
                    </td>
                    <Transition.Root show={open} as={Fragment}>
                      <Dialog
                        as="div"
                        className="fixed z-10 inset-0 overflow-y-auto"
                        initialFocus={cancelButtonRef}
                        onClose={setOpen}
                      >
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                          </Transition.Child>

                          {/* This element is to trick the browser into centering the modal contents. */}
                          <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                          >
                            &#8203;
                          </span>
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <Elements stripe={stripePromise}>
                              <PaymentModal service={service} />
                            </Elements>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition.Root>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
