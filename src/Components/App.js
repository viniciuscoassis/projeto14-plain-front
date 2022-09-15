import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles";
import AuthScreen from "./authPage/AuthScreen";
import Home from "./Home/Home";
import Context from "../Context/context.js";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState("");
  const [cartQuantity, setCartQuantity] = useState(0);
  return (
    <>
      <GlobalStyle />
      <Context.Provider
        value={{
          token,
          setToken,
          cartQuantity,
          setCartQuantity,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthScreen />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}
