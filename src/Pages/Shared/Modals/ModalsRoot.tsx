import React from "react";
import useAuth from "./../../../Hooks/useAuth";
import ErrorModal from "./ErrorModal";
import LoginRegisterModal from "./LoginRegisterModal";

const ModalsRoot = () => {
  const { error, showErrorModal, showLoginModal } = useAuth();
  return (
    <div>
      <LoginRegisterModal />
      <ErrorModal />
    </div>
  );
};

export default ModalsRoot;
