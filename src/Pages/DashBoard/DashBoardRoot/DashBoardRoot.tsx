import React from "react";
import { Route, Routes } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../LoginRegister/AdminRoute/AdminRoute";
import Spinner from "../../Shared/Spinner/Spinner";
import MyServices from "../MyServices/MyServices";
import AddAdminForm from "./../../Forms/AddAdminForm/AddAdminForm";
import NotFound from "./../../NotFound/NotFound";
import AddService from "./../AddService/AddService";
import BookedService from "./../BookedService/BookedService";
import DashBoardHome from "./../DashBoardHome/DashBoardHome";
import DashBoardNav from "./../DashBoardNav/DashBoardNav";
import UsersList from "./../UsersList/UsersList";

const DashBoardRoot = () => {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <DashBoardNav />
        <div className="w-full md:space-y-4 md:px-4 md:py-3">
          <Routes>
            <Route path="/" element={<DashBoardHome />} />
            <Route path="/myservices" element={<MyServices />} />
            <Route
              path="/addservice"
              element={
                <AdminRoute>
                  <AddService />
                </AdminRoute>
              }
            />
            <Route
              path="/addadmin"
              element={
                <AdminRoute>
                  <AddAdminForm />
                </AdminRoute>
              }
            />
            <Route
              path="/bookedservices"
              element={
                <AdminRoute>
                  <BookedService />
                </AdminRoute>
              }
            />
            <Route
              path="/users"
              element={
                <AdminRoute>
                  <UsersList />
                </AdminRoute>
              }
            />
            {/* <Route path="/users" element={<UsersList />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default DashBoardRoot;
