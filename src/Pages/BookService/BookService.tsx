import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";
const BookService = () => {
  const [serviceData, setServiceData] = useState<any>([]);
  const [formData, setFormData] = useState<any>([]);
  const { user, setBooked } = useAuth();
  const { serviceId } = useParams();
  const minDate = new Date().toISOString().slice(0, 16);
  // const maxDate = tomo_date.toISOString().slice(0, 16);

  useEffect(() => {
    const url = `http://localhost:4000/service/${serviceId}`;
    axios.get(url).then((data: any) => {
      console.log(data);
      setServiceData(data.data);
    });
  }, []);

  const handleOnChange = (e: any) => {
    const field = e.target.name;
    const value = e.target.value;
    const data = { ...formData };
    data[field] = value;
    setFormData(data);
  };

  const handleBookService = (e: any) => {
    e.preventDefault();
    formData.name = user.displayName;
    formData.email = user.email;
    formData.serviceId = serviceId;
    formData.serviceName = serviceData.serviceName;
    formData.status = true;
    axios
      .post("http://localhost:4000/bookingservice", formData)
      .then(function (res: any) {
        console.log(res);
        setBooked(true);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  return (
    <div>
      {/* <BookedServiceNotification /> */}
      <div className="mt-10 sm:mt-0 mx-8 my-8">
        <div className="md:grid md:grid-cols-5 md:gap-6">
          <div className="md:col-span-2">
            <div className="px-4 sm:px-0">
              <h3 className="text-4xl font-medium leading-6 text-gray-900">
                {serviceData.serviceName}
              </h3>
              <img
                src={serviceData.serviceImageLink}
                alt={serviceData.serviceName}
                className="w-5/6 my-4"
              />
              <p className="mt-1 text-xl text-gray-600">
                {serviceData.description}
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-3">
            <form onSubmit={handleBookService}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={user.displayName}
                        disabled
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 ">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email-address"
                        value={user.email}
                        disabled
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="address"
                        onChange={handleOnChange}
                        id="street-address"
                        required
                        autoComplete="street-address"
                        autoFocus
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        onChange={handleOnChange}
                        required
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {/* date picker */}
                    <div className="col-span-6 sm:col-span-5 lg:col-span-4">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="datetime-local"
                        required
                        name="date"
                        onChange={handleOnChange}
                        id="date"
                        min={minDate}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
