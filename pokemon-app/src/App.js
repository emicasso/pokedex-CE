import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, List, Login } from "./pages";

export const AppContext = createContext();

function App() {
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("Logeado") === "true"
  );

  function onSuccess() {
    setIsLogged(true);
  }

  function onLogout() {
    setIsLogged(false);
    window.localStorage.removeItem("Logeado");
  }

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          onLogout,
          onSuccess,
          isLogged,
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          {isLogged ? null : <Route path="/login" element={<Login />} />}
          {isLogged ?  <Route path="/list" element={<List />} /> : null}
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
