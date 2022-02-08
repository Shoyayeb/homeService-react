import {
  IdentificationIcon,
  KeyIcon,
  MailIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState<any>({});
  const { setError, setIsLogin, createUserByEmail } = useAuth();

  // console.log(user);
  const handleOnChange = (e: any) => {
    const field = e.target.name;
    const value = e.target.value;
    const data = { ...registerData };
    data[field] = value;
    setRegisterData(data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerData);
    if (
      registerData === {} ||
      !registerData.email ||
      !registerData.password ||
      !registerData.displayName
    ) {
      console.log("notEntered", registerData);
      setError("Please enter your information correctly");
    } else {
      console.log("creating");
      createUserByEmail(
        registerData.email,
        registerData.password,
        registerData.displayName
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mb-2">
        <div className="flex relative ">
          <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <IdentificationIcon width="15" height="15" />
          </span>
          <input
            type="text"
            onChange={handleOnChange}
            id="sign-up-name"
            name="displayName"
            aria-required={true}
            required={true}
            autoComplete="name"
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Your Name"
          />
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex relative ">
          <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <MailIcon width="15" height="15" />
          </span>
          <input
            type="text"
            onChange={handleOnChange}
            id="sign-up-email"
            name="email"
            aria-required={true}
            required={true}
            autoComplete="email"
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Your email"
          />
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex relative ">
          <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <KeyIcon width="15" height="15" />
          </span>
          <input
            type="password"
            onChange={handleOnChange}
            id="sign-up-password"
            name="password"
            aria-required={true}
            required={true}
            autoComplete="new-password"
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Your password"
          />
        </div>
      </div>

      <div className="flex w-full">
        <button
          type="submit"
          className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
