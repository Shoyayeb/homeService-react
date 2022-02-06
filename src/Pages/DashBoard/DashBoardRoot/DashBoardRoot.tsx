import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./../../NotFound/NotFound";
import AddService from "./../AddService/AddService";
import DashBoardNav from "./../DashBoardNav/DashBoardNav";
import UsersList from "./../UsersList/UsersList";

const DashBoardRoot = () => {
  return (
    <div>
      <DashBoardNav />
      <Routes>
        <Route path="/" element={<AddService />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/users" element={<UsersList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default DashBoardRoot;
