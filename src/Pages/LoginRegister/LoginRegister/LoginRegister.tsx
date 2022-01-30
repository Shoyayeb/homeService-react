import React from "react";
import LoginBanner from "../../../Assets/clean.png";
import Login from "../Login/Login";

const LoginRegister = () => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
      <div className="relative ">
        <img
          src={LoginBanner}
          style={{
            // filter: "blur(70px)",
            position: "absolute",
            width: "100%",
          }}
          className="blur-xl brightness-110 drop-shadow-lg contrast-125"
          alt="LoginBanner"
          loading="lazy"
        />
        <img
          src={LoginBanner}
          style={{ width: "100%", position: "relative" }}
          alt="LoginBanner"
          loading="lazy"
        />
      </div>
      <div className=" min-h-full flex flex-col justify-center items-center gap-4">
        <div className="text-center ">
          <span className="text-5xl ">Sign In</span>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default LoginRegister;
