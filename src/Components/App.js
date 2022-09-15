import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles";
import AuthScreen from "./authPage/AuthScreen";
import Home from "./Home/Home";
import Context from "../Context/context.js";
import { useState } from "react";
import Products from "./Products/Products";
import ProfilePage from "./ProfilePage/ProfilePage";

export default function App() {
  const [token, setToken] = useState("");
  const [cartQuantity, setCartQuantity] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <GlobalStyle />
      <Context.Provider
        value={{
          token,
          setToken,
          cartQuantity,
          setCartQuantity,
          name,
          setName,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthScreen />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}
