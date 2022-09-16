import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles";
import AuthScreen from "./authPage/AuthScreen";
import Home from "./Home/Home";
import Context from "../Context/context.js";
import { useState } from "react";
import Products from "./Products/Products";
import ProfilePage from "./ProfilePage/ProfilePage";
import ProductDetails from "./Products/ProductDetails";

export default function App() {
  const [token, setToken] = useState("");
  const [cart, setCart] = useState([]);
  const [storage, setStorage] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Context.Provider
        value={{
          token,
          setToken,

          storage,
          setStorage,
          cart,
          setCart,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthScreen />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:nomeProduto" element={<ProductDetails />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}
