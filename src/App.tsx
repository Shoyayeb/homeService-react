import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import ModalsRoot from "./Pages/Shared/Modals/ModalsRoot";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <ModalsRoot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
