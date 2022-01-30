import React, { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }: any) => {
  const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={allContexts as any}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
