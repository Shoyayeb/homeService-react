import { KeyIcon, MailIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const LoginForm = () => {
  const { setError, loginUserByEmail, isLoading } = useAuth();
  const [loginData, setLoginData] = useState<any>({});
  const { isLogin, setIsLogin } = useAuth();
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
    console.log(loginData);
    if (loginData === {} || !loginData.email || !loginData.password) {
      setError("Please Enter Your Email And Password");
    } else {
      console.log("logging in");
      emailSignIn();
    }
  };

  const changeForm = () => {
    if (isLogin) {
      setIsLogin(false);
    } else if (!isLogin) {
      setIsLogin(true);
    }
  };
  return (
    <div>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            {isLoading ? <h2>Loading...</h2> : ""}
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
                href="/"
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
              {isLogin ? "Login" : "Register"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center mt-6">
        <button
          className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          onClick={changeForm}
        >
          <span className="ml-2">
            {isLogin
              ? `You Don't Have An Account?`
              : "Have an Account Already?"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
