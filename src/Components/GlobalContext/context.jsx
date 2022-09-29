import React from "react";
import { createContext } from "react";
import { GlobalProvider } from "./useContext";

export const GlobalContext = createContext({});

const ContextProvider = ({ children }) => {
  const value = GlobalProvider();

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider;