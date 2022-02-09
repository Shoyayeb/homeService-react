import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import BookService from "./Pages/BookService/BookService";
import DashBoardRoot from "./Pages/DashBoard/DashBoardRoot/DashBoardRoot";
import AddAdminForm from "./Pages/Forms/AddAdminForm/AddAdminForm";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import LoginRegisterModal from "./Pages/Shared/Modals/LoginRegisterModal";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <LoginRegisterModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/protected"
          element={
            <PrivateRoute>
              <AddAdminForm />
            </PrivateRoute>
          }
        />
        <Route path="/bookservice/:serviceId" element={<BookService />} />
        <Route path="/dashboard/*" element={<DashBoardRoot />} />

        <Route path="/admin/*" element={<AddAdminForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
