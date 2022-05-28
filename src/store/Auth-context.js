import React from "react";
import { useState, createContext } from "react";

export const StoreContext = createContext();

export default function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <StoreContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </StoreContext.Provider>
  );
}
