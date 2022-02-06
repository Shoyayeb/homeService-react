import axios from "axios";
import React, { useState } from "react";

const AddService = () => {
  const [serviceData, setServiceData] = useState<any>({});
  const [added, setAdded] = useState<boolean>(false);
  const handleOnChange = (e: any) => {
    const field = e.target.name;
    const value = e.target.value;
    const data = { ...serviceData };
    data[field] = value;
    setServiceData(data);
  };

  const submitNewService = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(serviceData);

    axios
      .post("http://localhost:4000/addservice", serviceData)
      .then(function (res: any) {
        console.log(res);
        setAdded(true);
      })
      .catch(function (error: any) {
        console.log(error);
        setAdded(false);
      });
  };
  if (added) {
    setTimeout(() => setAdded(false), 5000);
  }
  return (
    <form
      className="flex w-full max-w-sm space-x-3"
      onSubmit={submitNewService}
    >
      <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
        {added ? (
          <p className="underline decoration-pink-500/30 text-red-600 bg-slate-200 py-3 border-2 border-purple-600 text-center font-medium mb-2">
            Added
          </p>
        ) : (
          ""
        )}
        <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
          Add a new service
        </div>
        <div className="grid max-w-xl grid-cols-3 gap-4 m-auto">
          <div className="col-span-4">
            <div className=" relative ">
              <input
                onChange={handleOnChange}
                name="serviceName"
                type="text"
                id="name"
                required
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Service Name"
              />
            </div>
          </div>

          <div className="col-span-4 lg:col-span-1">
            <div className=" relative ">
              <input
                onChange={handleOnChange}
                name="servicePrice"
                type="number"
                id="price"
                required
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Price"
              />
            </div>
          </div>
          <div className="col-span-4 lg:col-span-2">
            <div className=" relative ">
              <input
                onChange={handleOnChange}
                name="serviceImageLink"
                type="link"
                id="link"
                required
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Image Link"
              />
            </div>
          </div>
          <div className="col-span-4">
            <label className="text-gray-700" htmlFor="name">
              <textarea
                onChange={handleOnChange}
                className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="description"
                required
                placeholder="Enter service description"
                name="description"
                rows={5}
                cols={30}
              ></textarea>
            </label>
          </div>
          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddService;
