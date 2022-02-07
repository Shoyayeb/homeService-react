import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import BookService from "./Pages/BookService/BookService";
import DashBoardRoot from "./Pages/DashBoard/DashBoardRoot/DashBoardRoot";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
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
        <Route path="/bookservice/:serviceId" element={<BookService />} />
        <Route path="/dashboard/*" element={<DashBoardRoot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
