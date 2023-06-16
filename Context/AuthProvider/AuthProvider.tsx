'use client'
import { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase";

export const AuthContext = createContext(null);

const AuthProvider: any = ({ children }:any) => {
  const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={allContexts as any}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
