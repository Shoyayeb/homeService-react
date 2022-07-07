import { Route, Routes } from "react-router-dom";
import AddAdminForm from "./Components/Forms/AddAdminForm/AddAdminForm";
import ErrorModal from "./Components/Modals/ErrorModal";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import BookService from "./Pages/BookService/BookService";
import DashBoardRoot from "./Pages/DashBoard/DashBoardRoot/DashBoardRoot";
import Home from "./Pages/Home/Home/Home";
import LoginRegisterRoot from "./Pages/LoginRegister/LoginRegisterRoot/LoginRegisterRoot";
import PrivateOutlet from "./Pages/LoginRegister/PrivateOutlet/PrivateOutlet";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
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
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="bookservice/:serviceId" element={<BookService />} />
            <Route path="dashboard/*" element={<DashBoardRoot />} />
          </Route>
          <Route path="/admin/*" element={<AddAdminForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
