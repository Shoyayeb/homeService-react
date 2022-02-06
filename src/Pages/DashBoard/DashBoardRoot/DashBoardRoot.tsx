import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./../../NotFound/NotFound";
import AddService from "./../AddService/AddService";
import DashBoardHome from "./../DashBoardHome/DashBoardHome";
import DashBoardNav from "./../DashBoardNav/DashBoardNav";
import UsersList from "./../UsersList/UsersList";

const DashBoardRoot = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <DashBoardNav />
        <div className="flex flex-col justify-center items-center w-full md:space-y-4 md:px-4 md:py-3">
          <Routes>
            <Route path="/" element={<DashBoardHome />} />
            <Route path="/addService" element={<AddService />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default DashBoardRoot;
