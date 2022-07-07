import { Route, Routes } from "react-router-dom";
import AddAdminForm from "../../../Components/Forms/AddAdminForm/AddAdminForm";
import Spinner from "../../../Components/Spinner/Spinner";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../LoginRegister/AdminRoute/AdminRoute";
import AllServices from "../AllServices/AllServices";
import MyServices from "../MyServices/MyServices";
import NotFound from "./../../NotFound/NotFound";
import AddService from "./../AddService/AddService";
import BookedService from "./../BookedService/BookedService";
import DashBoardHome from "./../DashBoardHome/DashBoardHome";
import DashBoardNav from "./../DashBoardNav/DashBoardNav";
import Review from "./../Review/Review";
import UsersList from "./../UsersList/UsersList";

const DashBoardRoot = () => {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen ">
      <div className="flex items-start justify-between">
        <DashBoardNav />
        <div className=" md:space-y-4 md:px-4 md:py-3 mx-auto max-h-screen overflow-y-scroll overflow-x-hidden">
          <Routes>
            <Route path="/" element={<DashBoardHome />} />
            <Route path="/bookings" element={<MyServices />} />
            <Route path="/review" element={<Review />} />
            <Route
              path="/admin/addservice"
              element={
                <AdminRoute>
                  <AddService />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/addadmin"
              element={
                <AdminRoute>
                  <AddAdminForm />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/bookedservices"
              element={
                <AdminRoute>
                  <BookedService />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/allservice"
              element={
                <AdminRoute>
                  <AllServices />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/users"
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
