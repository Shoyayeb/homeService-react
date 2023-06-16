import { KeyIcon, MailIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const LoginForm = () => {
  const { setError, loginUserByEmail } = useAuth();
  const [loginData, setLoginData] = useState<any>({});
  const navigate = useNavigate();
  const location: any = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const emailSignIn = () => {
    loginUserByEmail(loginData.email, loginData.password).then(
      (result: any) => {
        navigate(redirect_uri);
      }
    );
  };
  const handleOnChange = (e: any) => {
    const field = e.target.name;
    const value = e.target.value;
    const data = { ...loginData };
    data[field] = value;
    setLoginData(data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginData === {} || !loginData.email || !loginData.password) {
      setError("Please Enter Your Email And Password");
    } else {
      emailSignIn();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex flex-col mb-2">
        <div className="flex relative ">
          <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <MailIcon width="15" height="15" />
          </span>
          <input
            type="text"
            id="sign-in-email"
            name="email"
            onChange={handleOnChange}
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
            id="sign-in-password"
            name="password"
            onChange={handleOnChange}
            aria-required={true}
            required={true}
            autoComplete="current-password"
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Your password"
          />
        </div>
      </div>
      <div className="flex items-center mb-6 -mt-4">
        <div className="flex ml-auto">
          <a
            href="/login"
            className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
          >
            Forgot Your Password?
          </a>
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

export default LoginForm;
