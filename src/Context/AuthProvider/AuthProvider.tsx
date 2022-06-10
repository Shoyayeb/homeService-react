import React, { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase";

export const AuthContext = createContext(null);

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={allContexts as any}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
