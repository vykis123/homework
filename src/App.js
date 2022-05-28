import { Routes, Route, Navigate } from "react-router-dom";

import React, { useContext } from "react";

import User from "./pages/User";
import Login from "./pages/Login";
import Fav from "./pages/Fav";
import { StoreContext } from "./store/Auth-context";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(StoreContext);

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      {isLoggedIn && <Route path="/user" element={<User />}></Route>}
      {isLoggedIn && <Route path="/fav" element={<Fav />}></Route>}
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}

export default App;
