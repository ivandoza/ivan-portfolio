import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState({});

  return (
    <DataContext.Provider value={{ portfolioData, setPortfolioData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };