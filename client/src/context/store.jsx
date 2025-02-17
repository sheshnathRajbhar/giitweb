import React, { createContext } from 'react';


export const MyContext = createContext();



export const MyContextProvider = ({ children }) => {
  // Define state or data to share
  const backendUrl = "http://localhost:5000";
  const adminUrl  = "http://localhost:5174";

  return (
    <MyContext.Provider value={{ backendUrl, adminUrl}}>
      {children}
    </MyContext.Provider>
  );
};




