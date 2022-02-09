import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import BookService from "./Pages/BookService/BookService";
import DashBoardNav from "./Pages/DashBoard/DashBoardNav/DashBoardNav";
import DashBoardRoot from "./Pages/DashBoard/DashBoardRoot/DashBoardRoot";
import AddAdminForm from "./Pages/Forms/AddAdminForm/AddAdminForm";
import Home from "./Pages/Home/Home/Home";
import LoginRegisterRoot from "./Pages/LoginRegister/LoginRegisterRoot/LoginRegisterRoot";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import ErrorModal from "./Pages/Shared/Modals/ErrorModal";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <ErrorModal />
      <div className="dark:bg-gray-200 bg-opacity-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginRegisterRoot />} />
          <Route path="/bookservice/:serviceId" element={<BookService />} />
          <Route path="/dashboard/*" element={<DashBoardRoot />} />
          <Route
            path="/hire_single"
            element={
              <PrivateRoute>
                <DashBoardNav />
              </PrivateRoute>
            }
          />
          <Route path="/admin/*" element={<AddAdminForm />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
