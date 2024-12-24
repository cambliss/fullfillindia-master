// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isTrueFalse, setIsTrueFalse] = useState(false);

  const toggleTrueFalse = () => {
    setIsTrueFalse((prevValue) => !prevValue);
  };

  return (
    <MyContext.Provider value={{ isTrueFalse, toggleTrueFalse }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
