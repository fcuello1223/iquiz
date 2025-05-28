import React from "react";

import useCategories from "./useCategories";

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const { isLoading, categories } = useCategories();
  
  return (
    <GlobalContext.Provider value={{ isLoading, categories }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
