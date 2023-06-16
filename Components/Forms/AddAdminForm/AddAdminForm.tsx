import axios from "axios";
import React, { useState } from "react";
import DoneModal from "../../Modals/DoneModal";

const AddAdminForm = () => {
  const [adminData, setAdminData] = useState<any>({});
  const [done, setDone] = useState<Boolean>(false);
  const handleOnChange = (e: any) => {
    const field = e.target.name;
    const value = e.target.value;
    const data = { ...adminData };
    data[field] = value;
    setAdminData(data);
  };

  const submitAdminForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put("https://homeservice-ixli.onrender.com/adduser/admin", adminData)
      .then(function (res: any) {
        setDone(true);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return (
    <div className=" dark:bg-gray-500">
      {done ? <DoneModal></DoneModal> : ""}
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0 ">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-5">
              <h3 className="text-3xl font-medium leading-8 text-gray-900 dark:text-white text-center">
                Add Admin
              </h3>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-200 text-center">
                Add an admin to manage this websites data and users. To login as
                admin you have to log out from previous account and put the
                email and password in the login form. It will detect admin
                automatically and let admins login.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2 md:w-4/6">
            <form onSubmit={submitAdminForm}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
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
                        id="email"
                        autoComplete="email"
                        required
                        onChange={handleOnChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Admin
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default AddAdminForm;
